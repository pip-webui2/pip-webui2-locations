declare let google: any;

import * as _ from 'lodash';
import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { initMap, moveMap, generatePosition, onResize } from '../shared/locations-utils';

@Component({
    selector: 'pip-location-ip',
    templateUrl: 'location-ip.component.html',
    styleUrls: ['./location-ip.component.scss']
})
export class PipLocationIpComponent implements OnInit {
    ngOnInit() { }

    private _ipAddress: string = null;
    private _position: any = null;
    private _initialized: boolean = false;
    private mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        scrollwheel: false,
        draggable: false
    };
    private map: any;
    private marker: any;
    private error: boolean = false;

    @Output() onExtraInfo: EventEmitter<any> = new EventEmitter<any>();

    @Input() set ipAddress(ip: string) {
        if (!this.verifyIp(ip)) return;

        this._ipAddress = ip;
        if (this._ipAddress) {
            this.getInfo();
        }
    }
    @Input() getInfoUrl: string = 'https://freegeoip.net/json/';
    @Input() height: string = '200px';
    @Input() width: string = '100%';

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private http: HttpClient
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-location-ip', true);
        renderer.setElementStyle(elRef.nativeElement, 'height', this.height);
        renderer.setElementStyle(elRef.nativeElement, 'width', this.width);
    }

    ngOnDestroy() { 
        google.maps.event.clearListeners(window, 'resize');
    }

    private getInfo() {
        this.http.get(this.getInfoUrl + this._ipAddress).subscribe((data: any) => {
            this._position = generatePosition(data.latitude, data.longitude);
            this.error = false;
            if (!this._initialized) {
                google.maps.event.addDomListener(window, "resize", () => {
                    onResize(this.map);
                });
                let results = initMap(this.elRef.nativeElement.querySelector('.map-container'), this.mapOptions, this._position, true, null, () => {
                    this._initialized = true;
                });
                this.map = results.map;
                this.marker = results.marker;
            } else {
                moveMap(this.map, this.marker, this._position);
            }
            if (this.onExtraInfo) this.onExtraInfo.emit(data);
        }, () => {
            console.log('error');
            this.error = true;
        })
    }

    private verifyIp(ip: string) {
        return (ip.match(new RegExp(/\./g)).length === 3 && ip.substring(ip.length - 1, ip.length) !== '.'); 
    }
}