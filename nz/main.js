// Neuseelandreise-Skript 

var map = L.map('map').setView([-43.512, 170.105], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-43.512, 170.105]).addTo(map)
    .bindPopup('Foc-Gletscher.<br> Wo Eis noch Eis ist.')
    .openPopup();