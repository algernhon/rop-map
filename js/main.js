// List of current layers
const LIST_PATHS = {};

/*
 * Leaflet map setup
*/
let map = L.map('map', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 4,
    zoomControl: false
});

L.control.zoom({
    position: 'topright'
}).addTo(map);

let bounds = [[0,0], [1000,1366]];
let image = L.imageOverlay('./img/map.webp', bounds).addTo(map);
map.fitBounds(bounds);

/* 
 * Plugin to show coordinates on click
*/
let c = new L.Control.Coordinates();
c.addTo(map);
map.on('click', function(e) {
	c.setCoordinates(e);
});

/* 
 * Alright, this thing is a real mess, need to be refactored asap
*/
DATA_MARKERS.markers.forEach(marker => {
    const confirmed = (marker.isConfirmed) ? ""  : "<div class='tooltip-tag tooltip-tag--unconfirmed'>coordonates not confirmed</div>";
    const readMore = (marker.readMoreUrl) ? "<div class='tooltip-moreinfo'><a href='" + marker.readMoreUrl + "' target='_blank'>Read more about " + marker.title + "</a></div>"  : "";
    const type = DATA_MARKERS.types.find(type => type.name === marker.type);

    L.marker(marker.coordinates, {icon: L.icon({iconUrl: 'img/markers/'+ type.icon, iconSize: type.iconSize, iconAnchor: type.iconAnchor, popupAnchor: type.popupAnchor}), maxWidth: '500', title: marker.title}).bindPopup("<div class='tooltip-image-wrapper' style='background: url(\"img/places/min/" + marker.image + "\")'><div class='tooltip-resize'><a role='button' aria-label='Open higher resolution picture' href='img/places/" + marker.image + "' target='_blank'><img width=30 alt='' src='img/markers/expand-arrows-solid.svg' /></a></div></div><div class='tooltip-content'><header class='tooltip-header'><h2>" + marker.title + "</h2><div class='tooltip-tag'>" + marker.type + "</div>" + confirmed + "</header><div>" + marker.decription + "<div class='tooltip-seenin'><strong>Seen in:</strong> "+ marker.episodes + "</div>"+ readMore + "</div></div>").addTo(map);
        
});

/*
 * Function that draw or remove a path from the map
 *
 * @param element the input checked/unchecked by the user
*/
function togglePathCheckbox(element) {
    const CHARACTER = DATA_PATHS.paths.find(path => path.character === element.name);
    const COLOR = DATA_PATHS.characters.find(color => color.name === element.name).color;

    if (element.checked) {
        LIST_PATHS[element.name] = L.polyline(CHARACTER.coordinates, {color: COLOR, weight: 4, snakingSpeed: 300}).addTo(map).snakeIn();
    } else {
        LIST_PATHS[element.name].removeFrom(map);
    }
}

function hideshow() {
    const button = document.getElementById("main_button");
    const menu = document.getElementById("main");

    const isHidden = button.classList.contains('main_button--hidden');

    if (!isHidden) {
        button.classList.add("main_button--hidden");
        menu.classList.add("menu--hidden");
    }
    else {
        button.classList.remove("main_button--hidden");
        menu.classList.remove("menu--hidden");
    }
}