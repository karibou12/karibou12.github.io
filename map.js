
// On initialise la latitude et la longitude de Troyes (centre de la carte)
const lat = 46.5203285;
const lon = 6.0235486;
let macarte = null;

//liste de villes
let villes = {
    "Morbier": {"lat": 46.5363166, "lon": 6.0169531, "city": "Morbier"},

};




// Fonction d'initialisation de la carte
function initMap() {

    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1, // zoom bloquer
        maxZoom: 10
     }).addTo(macarte);





    // Ajout de marqueur nom de ville à la liste des villes
    for (ville in villes) {
        var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
        // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
        marker.bindPopup(ville);
    }

    // Disable mousewheel zoom
    // macarte.scrollWheelZoom.disable();
}


// l'initialisation qui s'exécute lorsque le DOM est chargé
window.onload = function() {
    initMap();
}



// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < liNavs.length; i++) {
//     liNavs[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//
//         // If there's no active class
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace(" active", "");
//         }
//
//         // Add the active class to the current/clicked button
//         this.className += " active";
//     });
// }
//
//
//
