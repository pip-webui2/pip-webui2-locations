declare let google: any;

import { Component, Input, OnInit, AfterViewInit, Renderer, ElementRef, OnDestroy } from '@angular/core';

import { initMap, moveMap, verifyPosition, onResize } from '../shared/locations-utils';

@Component({
    selector: 'pip-location',
    templateUrl: 'location.component.html',
    styleUrls: ['./location.component.scss']
})
export class PipLocationComponent implements OnInit, OnDestroy, AfterViewInit {
    public showMap = false;
    public isCollapsable = true;
    public showIcon = true;
    private _mapContainer: any;
    private _position: any = null;
    private map: any = null;
    private marker: any = null;
    private _initialized = false;
    private _positionChanged = false;
    private mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        scrollwheel: false,
        draggable: false
    };

    @Input() set collapsable(is: boolean) {
        this.isCollapsable = is;
    }
    @Input() public locationName: string;
    @Input() set locationPos(position: any) {
        if (verifyPosition(position)) {
            this._position = position;
            if (this.showMap) {
                moveMap(this.map, this.marker, this._position);
            } else {
                this._positionChanged = true;
            }
        } else { console.warn('pipLocation: Incorrect location data'); }
    }
    @Input() set hideIcon(hide: boolean) {
        this.showIcon = !hide;
    }
    @Input() icon = 'place';
    @Input() disabled = false;

    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-location', true);
    }

    ngAfterViewInit() {
        this._mapContainer = this.elRef.nativeElement.querySelector('.pip-location-container');
        if (this.isCollapsable) {
            google.maps.event.addDomListener(window, 'resize', () => {
                onResize(this.map);
            });
            const result = initMap(this._mapContainer, this.mapOptions, this._position, true, null, () => {
                if (this.showMap) { this._initialized = true; }
            });
            this.map = result.map;
            this.marker = result.marker;
        }
    }

    ngOnDestroy() {
        google.maps.event.clearListeners(window, 'resize');
    }

    public toggleMap() {
        this.showMap = !this.showMap;
        if (this.showMap) {
            if (!this._initialized) {
                setTimeout(() => {
                    if (this.isCollapsable) {
                        const result = initMap(this._mapContainer, this.mapOptions, this._position, true, null, () => {
                            if (this.showMap) { this._initialized = true; }
                        });
                        this.map = result.map;
                        this.marker = result.marker;
                    }
                }, 350);
            }

            if (this._positionChanged) {
                setTimeout(() => {
                    moveMap(this.map, this.marker, this._position);
                    this._positionChanged = false;
                }, 350);
            }
        }
    }
}
