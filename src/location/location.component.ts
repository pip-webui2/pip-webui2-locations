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

    @Input() set collapsable(is: boolean) {
        this.isCollapsabele = is;
    }
    @Input() public locationName: string;
    @Input() set locationPos(position: any) {
        if (this.verifyPosition(position)) {
            this._position = position;
            if (this.map != null) {
                if (!this.showMap) this._initialized = false;
                this.moveMap();
            }
        } else console.warn('pipLocation: Incorrect location data');
    }
    @Input() set hideIcon(hide: boolean) {
        this.showIcon = !hide;
    }
    @Input() icon: string = 'place';
    @Input() disabled: boolean = false;

    ngOnInit() {}

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-location', true);
    }

    ngAfterViewInit() { 
        this.initMap();
    }

    public toggleMap() {
        this.showMap = !this.showMap;
        if (this.showMap && !this._initialized) {
            setTimeout(() => {
                this.initMap();
            }, 350);
        }
    }

    private initMap() {
        if (!this.isCollapsabele) return;

        this._mapContainer = this.elRef.nativeElement.querySelector('.pip-location-container');

        const coordinates = new google.maps.LatLng(
            this._position.coordinates[0],
            this._position.coordinates[1]
        );

        const mapOptions = {
            center: coordinates,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            scrollwheel: false,
            draggable: false
        };

        this.map = new google.maps.Map(this._mapContainer, mapOptions);
        this.marker = new google.maps.Marker({
            position: coordinates,
            animation: google.maps.Animation.DROP,
            map: this.map
        });

        if (this.showMap) this._initialized = true;
    }

    private moveMap() {
        const coordinates = new google.maps.LatLng(
            this._position.coordinates[0],
            this._position.coordinates[1]
        );

        this.marker.setPosition(coordinates);
        this.map.panTo(coordinates);
    }

    private verifyPosition(position: any) {
        return position.coordinates && _.isArray(position.coordinates) && position.coordinates.length == 2;
    }
}