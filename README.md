# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Location controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

GPS and location technologies made position determination available for everyone everywhere. 
Position information today is used in Line-of-Business applications today very frequently.
Pip.WebUI.Locations module provides controls to visualize and edit positions. 
They are built on the of Google Maps and require registered key to be set by developers.

### Location view 

**Shows address or coordinates if address is not available followed by the map with the point. The control can be set to make map collapsable to save some space on screen**

**Using**

Template:
```html
<pip-location [locationPos]="locationPos" [locationName]="locationName"></pip-location>
```

Initilaized data:
```typescript
locationPos = {
	coordinates: [
		48.01976,
		37.85854
	]
};

locationName = 'Donetsk, Kadievskaya st.';
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-locations/raw/master/doc/images/location.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-locations/raw/master/doc/images/locations.png"/>
</a>

### Location IP 

**Control may look exactly as Location view. But instead of position it accepts IP address and uses Google location service to convert it into physical address. This control can be helpful to visualize location of servers or places there users signin into application**

**Using**

```html
<pip-location-ip [ipAddress]="ipAddress" (onExtraInfo)="getExtraInfo($event)"></pip-location-ip>
```

```typescript
ipAddress = '109.123.67.37';

getExtraInfo(info) {
	infoKeys = Object.keys(info);
	extraInfo = info;
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-locations/raw/master/doc/images/location-ip.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-locations/raw/master/doc/images/locations-ip.png"/>
</a>

### Location edit 
**Allows to change the location address or coordinates.They can be entered manually or set location by manually picking a point on map, or using current location from the device**

**Using**

Template:
```html
<pip-location-edit [showInput]="showInput" [disabled]="disabled" [locationPos]="locationPos" [locationName]="locationName" (onChangeLocation)="onChangeLocation($event)"></pip-location-edit>
```

Handler:

```typescript
onChangeLocation(data) {
	locationPos.coordinates = data.coordinates;
	locationName = data.locationName;
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-locations/raw/master/doc/images/location-edit.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-locations/raw/master/doc/images/locations-edit.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-locations --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
