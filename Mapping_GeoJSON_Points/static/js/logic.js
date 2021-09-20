// Add console.log to check to see if our code is working.
console.log("working");

// 13.5.2
// Create the map object with center at the San Francisco airport.
let map = L.map("mapid").setView([30, 30], 2);




// We create the tile layer that will be the background of our map. Having this set before accessing data ensures the entire data set loads.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/chayda/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our Geo JSON data.
L.geoJSON(airportData).then(function(data) {
      console.log(data);
      // Creating a GeoJSON layer with the retrieved data.
      L.geoJson(data).addTo(map);
});