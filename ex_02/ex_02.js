window.onload = function() {
    // Initialize the map and set its view to France with a starting zoom level
    let map = L.map('map').setView([46.603354, 1.888334], 6);

    // Load and display tile layer on the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define custom Epitech icon
    var epitechIcon = L.icon({
        iconUrl: 'imageres/image.png', // Make sure this path is correct
        iconSize: [40, 60], // size of the icon
        iconAnchor: [20, 60], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -60] // point from which the popup should open relative to the iconAnchor
    });

    // Define the Epitech locations with their coordinates
    var locations = [
        { city: "Paris", coords: [48.8566, 2.3522] },
        { city: "Nantes", coords: [47.2184, -1.5536] },
        { city: "Lyon", coords: [45.7640, 4.8357] },
        { city: "Bordeaux", coords: [44.8378, -0.5792] },
        { city: "Toulouse", coords: [43.6047, 1.4442] }
    ];

    // Add markers to the map with popups
    locations.forEach(function(location) {
        var marker = L.marker(location.coords, { icon: epitechIcon }).addTo(map);
        marker.bindPopup(<b>${location.city} rocks!</b>);
    });
};