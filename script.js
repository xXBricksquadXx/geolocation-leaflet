// Get the map container element
const mapContainer = document.getElementById('map');

// Initialize the map
const map = L.map(mapContainer).setView([0, 0], 8);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Get user's current location
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const userCoords = [position.coords.latitude, position.coords.longitude];

    // Create a marker for user's location
    const userMarker = L.marker(userCoords).addTo(map);
    
    // Center the map on user's location
    map.setView(userCoords);
  }, function(error) {
    console.error("Error getting user's location:", error.message);
  });
} else {
  console.log("Geolocation is not available");
}
