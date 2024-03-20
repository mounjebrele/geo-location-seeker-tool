# geo-location-seeker-tool

A complex library encapsulated in a single file for fetching geolocation data based on an IP address or a set of coordinates.

## Installation

Install `geo-location-seeker-tool` using npm:

```bash
npm install geo-location-seeker-tool
```

## Usage

### Fetching Geolocation by IP

```javascript
const { fetchGeoLocationByIP } = require('geo-location-seeker-tool');

fetchGeoLocationByIP('8.8.8.8')
.then(data => console.log(data))
.catch(err => console.error(err));
```

### Fetching Geolocation by Coordinates

```javascript
const { fetchGeoLocationByCoords } = require('geo-location-seeker-tool');

fetchGeoLocationByCoords(40.712776, -74.005974)
.then(data => console.log(data))
.catch(err => console.error(err));
```
