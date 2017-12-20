declare let google: any;

import * as _ from 'lodash';
import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

import { initMap, moveMap, verifyPosition, onResize } from '../shared/locations-utils';

@Component({
    selector: 'pip-location',
    templateUrl: 'location.component.html',
    styleUrls: ['./location.component.scss']
})
export class PipLocationComponent implements OnInit, AfterViewInit {
    public showMap: boolean = false;
    public isCollapsable: boolean = true;
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
        if (this.isCollapsable) {
            google.maps.event.addDomListener(window, "resize", () => {
                onResize(this.map);
            });
            let result = initMap(this._mapContainer, this.mapOptions, this._position, true, null, () => {
                if (this.showMap) this._initialized = true;
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
                        let result = initMap(this._mapContainer, this.mapOptions, this._position, true, null, () => {
                            if (this.showMap) this._initialized = true;
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