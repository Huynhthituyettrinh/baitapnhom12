/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
 function moveMapToBerlin(map){
    map.setCenter({lat:10.03253508289337, lng:105.76694344094564});
    map.setZoom(14);
  }

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "0CFVhBoVR88uqjts8kcMC-mi_FAsXnIyiZur2tfAbEY"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('bando'),
  defaultLayers.raster.terrain.map,{
  center: {lat:10.03253508289337, lng:105.76694344094564},
  zoom: 15,
  pixelRatio: window.devicePixelRatio || 1
});
var MarkerCT = new H.map.Marker({lat:10.03253508289337, lng:105.76694344094564});
map.addObject(MarkerCT);

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
//var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
 // moveMapToBerlin(map);
}