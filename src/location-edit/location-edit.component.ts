declare let google: any;

import * as _ from 'lodash';
import { Component, Input, Output, OnInit, ChangeDetectorRef, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { initMap, moveMap, verifyPosition, onResize } from '../shared/locations-utils';

@Component({
    selector: 'pip-location-edit',
    templateUrl: 'location-edit.component.html',
    styleUrls: ['./location-edit.component.scss']
})
export class PiplocationEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    private _position: any = {
        coordinates: [
            0, 0
        ]
    };
    private _initialized: boolean = false;
    private map: any;
    private _disabled: boolean = false;
    private _showInput: boolean = false;
    public locationNameGeocoder: string = null;
    public marker: any = null;

    @Output() onChangeLocation: EventEmitter<any> = new EventEmitter<any>();

    @Input() set locationName(name: string) {
        this.locationNameGeocoder = name;
        this.getPositionByName();
    }
    @Input() set locationPos(position: any) {
        if (verifyPosition(position)) {
            this._position = position;
            this.setLocationName(new google.maps.LatLng(
                this._position.coordinates[0],
                this._position.coordinates[1]
            ));
            if (this._initialized) {
                this.mapOptions.zoom = 13;
                this.initMap();
            } else {
                moveMap(this.map, this.marker, this._position);
            }
        } else console.warn('pipLocationEdit: Incorrect location data');
    }
    @Input() height: string = '300px';
    @Input() width: string = '100%';
    @Input() public set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.updateMapAndMarkerInteractivity();
    }
    @Input() public set showInput(show: boolean) {
        this._showInput = show;
        setTimeout(() => {
            onResize(this.map);
        });
    }

    public get showInput() {
        return this._showInput;
    }

    public get disabled() {
        return this._disabled;
    }

    private mapOptions = {
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggable: !this._disabled,
        disableDoubleClickZoom: this._disabled,
        scrollwheel: !this._disabled
    };

    private markerOptions = {
        animation: google.maps.Animation.DROP,
        draggable: !this._disabled
    };

    public zoom: number = this.mapOptions.zoom;

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-location-edit', true);
        renderer.setElementStyle(elRef.nativeElement, 'height', this.height);
        renderer.setElementStyle(elRef.nativeElement, 'width', this.width);
    }

    ngAfterViewInit() {
        this.initMap();
    }

    ngOnDestroy() {
        google.maps.event.clearListeners(window, 'resize');
    }

    private addDragEndListener() {
        google.maps.event.addListener(this.marker, 'dragend', () => {
            this.locationName = null;
            this.changeLocation();
        });
    }

    private initMap() {
        google.maps.event.addDomListener(window, "resize", () => {
            onResize(this.map);
        });
        let results = initMap(this.elRef.nativeElement.querySelector('.map-container'), this.mapOptions, this._position, false, this.mapOptions, () => {
            this._initialized = true;
        });
        this.map = results.map;
        if (results.marker) {
            this.marker = results.marker;
            this.addDragEndListener();
        }
    }

    public toggleMarker() {
        this.marker ? this.removeMarker() : this.addMarker();
    }

    private addMarker(setName: boolean = true) {
        if (this.marker) this.removeMarker();
        let center = this.map.getCenter();
        let markerOptions = _.cloneDeep(this.markerOptions);
        markerOptions.position = center;
        markerOptions.map = this.map;

        this.marker = new google.maps.Marker(markerOptions);
        this.changeLocation(setName);
        this.addDragEndListener();
    }

    private removeMarker() {
        this.marker.setMap(null);
        this.marker = null;
    }

    public zoomIn() {
        this.map.setZoom(this.map.getZoom() + 1);
    }

    public zoomOut() {
        this.map.setZoom(this.map.getZoom() - 1);
    }

    public getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                moveMap(this.map, null, {
                    coordinates: [position.coords.latitude, position.coords.longitude]
                });
                if (this.map.getZoom() < 12) this.map.setZoom(12);
                this.addMarker();
            }
        );
    }

    public onNameChange(name) {
        this.locationNameGeocoder = name;
        this.getPositionByName();
    }

    private setLocationName(coordinates, callback?: Function) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            latLng: coordinates
        }, (results, status) => {
            // Process positive response
            if (results && results.length > 0) {
                this.locationNameGeocoder = results[0].formatted_address;
            }
            this.cd.detectChanges();

            if (callback) callback();
        });
    }

    private changeLocation(setName: boolean = true) {
        const coordinates = this.marker.getPosition();
        if (setName) {
            this.setLocationName(coordinates, () => {
                if (this.onChangeLocation) this.onChangeLocation.emit({
                    coordinates: [
                        coordinates.lat(),
                        coordinates.lng()
                    ],
                    locationName: this.locationNameGeocoder
                });
            });
        } else {
            if (this.onChangeLocation) this.onChangeLocation.emit({
                coordinates: [
                    coordinates.lat(),
                    coordinates.lng()
                ],
                locationName: this.locationNameGeocoder
            });
        }
    }

    private getPositionByName() {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            address: this.locationNameGeocoder
        }, (results, status) => {
            // Process response
            if (status === google.maps.GeocoderStatus.OK) {
                // Check for empty results
                if (results === null || results.length === 0) {
                    this.removeMarker()
                    return;
                }

                const geometry = results[0].geometry || {},
                    location = geometry.location || {};

                // Check for empty results again
                if (location.lat === null || location.lng === null) {
                    this.removeMarker()
                    return;
                }

                moveMap(this.map, null, { coordinates: [location.lat(), location.lng()] })
                if (this.map.getZoom() < 12) this.map.setZoom(12);
                this.addMarker(false);
            }
        });
    }

    private updateMapAndMarkerInteractivity() {
        if (this.map) {
            this.map.set('draggable', !this._disabled);
            this.map.set('scrollwheel', !this._disabled);
            this.map.set('disableDoubleClickZoom', this._disabled);
        }

        if (this.marker) {
            this.marker.set('draggable', !this._disabled);
        }
    }
}