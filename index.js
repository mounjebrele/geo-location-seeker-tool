const https = require('https');
const axios = require('axios');
const logger = require('axios-logger');

logger.info('initialized')

// A mock function to simulate fetching geolocation data based on IP
function fetchGeoLocationByIP(ip) {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    https.get(`https://api.geoseeker.com/geoip/${ip}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', (err) => reject(err));
  });
}

// A mock function to simulate fetching geolocation data based on coordinates
function fetchGeoLocationByCoords(lat, lon) {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    https.get(`https://api.geoseeker.com/geocoords?lat=${lat}&lon=${lon}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', (err) => reject(err));
  });
}

module.exports = { fetchGeoLocationByIP, fetchGeoLocationByCoords };
