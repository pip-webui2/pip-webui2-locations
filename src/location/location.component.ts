import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import * as _ from 'lodash';
declare let google: any;

@Component({
    selector: 'pip-location',
    templateUrl: 'location.component.html',
    styleUrls: ['./location.component.scss']
})
export class PipLocationComponent implements OnInit, AfterViewInit {
    public showMap: boolean = false;
    public isCollapsabele: boolean = true;
    public showIcon: boolean = true;
    private _mapContainer: any;
    private _position: any = null;
    private map: any = null;
    private marker: any = null;
    private _initialized: boolean = false;
    private _positionChanged: boolean = false;
    private mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        scrollwheel: false,
        draggable: false
    };

    @Input() set collapsable(is: boolean) {
        this.isCollapsabele = is;
    }
    @Input() public locationName: string;
    @Input() set locationPos(position: any) {
        if (this.verifyPosition(position)) {
            this._position = position;
            if (this.showMap) {
                this.moveMap(this.map, this.marker, this._position);
            } else {
                this._positionChanged = true;
            }
        } else console.warn('pipLocation: Incorrect location data');
    }
    @Input() set hideIcon(hide: boolean) {
        this.showIcon = !hide;
    }
    @Input() icon: string = 'place';
    @Input() disabled: boolean = false;

    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-location', true);
    }

    ngAfterViewInit() {
        this._mapContainer = this.elRef.nativeElement.querySelector('.pip-location-container');
        this.initMap(this._mapContainer, this.mapOptions, this._position, () => {
            if (this.showMap) this._initialized = true;
        });
    }

    public toggleMap() {
        this.showMap = !this.showMap;
        if (this.showMap) {
            if (!this._initialized) {
                setTimeout(() => {
                    this.initMap(this._mapContainer, this.mapOptions, this._position, () => {
                        if (this.showMap) this._initialized = true;
                    });
                }, 350);
            }

            if (this._positionChanged) {
                setTimeout(() => {
                    this.moveMap(this.map, this.marker, this._position);
                    this._positionChanged = false;
                }, 350);
            }
        }
    }

    private initMap(mapContainer, mapOptions, position, callback?: Function) {
        if (!this.isCollapsabele) return;

        const coordinates = new google.maps.LatLng(
            position.coordinates[0],
            position.coordinates[1]
        );

        mapOptions.center = coordinates;

        this.map = new google.maps.Map(this._mapContainer, mapOptions);
        this.marker = new google.maps.Marker({
            position: coordinates,
            animation: google.maps.Animation.DROP,
            map: this.map
        });

        if (callback) callback();
    }

    private moveMap(map, marker, newPosition) {
        const coordinates = new google.maps.LatLng(
            newPosition.coordinates[0],
            newPosition.coordinates[1]
        );

        marker.setPosition(coordinates);
        map.panTo(coordinates);
    }

    private verifyPosition(position: any) {
        return position.coordinates && _.isArray(position.coordinates) && position.coordinates.length == 2;
    }
}