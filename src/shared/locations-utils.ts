declare let google: any;
import * as _ from 'lodash';

export function initMap(mapContainer, mapOptions, position, callback?: Function) {
    const coordinates = new google.maps.LatLng(
        position.coordinates[0],
        position.coordinates[1]
    );

    mapOptions.center = coordinates;

    let map = new google.maps.Map(mapContainer, mapOptions);
    let marker = new google.maps.Marker({
        position: coordinates,
        animation: google.maps.Animation.DROP,
        map: map
    });

    if (callback) callback();

    return {
        map: map,
        marker: marker
    };
}

export function moveMap(map, marker, newPosition) {
    const coordinates = new google.maps.LatLng(
        newPosition.coordinates[0],
        newPosition.coordinates[1]
    );

    marker.setPosition(coordinates);
    map.panTo(coordinates);
}

export function verifyPosition(position: any) {
    return position.coordinates && _.isArray(position.coordinates) && position.coordinates.length == 2;
}