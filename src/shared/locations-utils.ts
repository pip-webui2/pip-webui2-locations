declare let google: any;

export function initMap(mapContainer, mapOptions, position, showMarker = true, markerOptions?, callback?: Function) {
    const coordinates = new google.maps.LatLng(
        position.coordinates[0],
        position.coordinates[1]
    );

    mapOptions.center = mapOptions.center || coordinates;
    let map = new google.maps.Map(mapContainer, mapOptions);
    let marker = null;

    if (showMarker) {
        if (markerOptions) {
            markerOptions.position = markerOptions.position || coordinates;
            markerOptions.map = map;
        }
        else markerOptions = {
            position: coordinates,
            animation: google.maps.Animation.DROP,
            map: map
        };

        marker = new google.maps.Marker(markerOptions);
    }

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

    if (marker) marker.setPosition(coordinates);
    map.panTo(coordinates);
    map.setCenter(coordinates);
}

export function verifyPosition(position: any) {
    return position.coordinates && Array.isArray(position.coordinates) && position.coordinates.length == 2;
}

export function generatePosition(latitude: any, longitude: any) {
    return {
        coordinates: [
            latitude, longitude
        ]
    };
}

export function onResize(map) {
    if (!map) return;

    let center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
}