// Global variables
const LIST_PATHS = {};
const CURRENT_CHAR = [];
const CURRENT_RANGE = [null, null];

const PATH_SPEED_ANIMATION = 400;
const PATH_WEIGHT = 4;

// Slider for the episode timeline
const timelineSlider = new rSlider({
    target: '#timelineSlider',
    show: ['Prologue', 'Episode 1', 'Episode 2', 'Episode 3', 'Episode 4', 'Episode 5', 'Episode 6'],
    values: [{"episode": 0, "season": 1}, {"episode": 1, "season": 1}, {"episode": 2, "season": 1}, {"episode": 3, "season": 1}, {"episode": 4, "season": 1}, {"episode": 5, "season": 1}, {"episode": 6, "season": 1}],
    range: true,
    tooltip: false,
    scale: true,
    labels: true,
    onChange: (vals) => timelineChange(vals)
});


// Leaflet map setup
let map = L.map('map', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 4,
    zoomControl: false
});

// Set zoom panel to the top right
L.control.zoom({
    position: 'topright'
}).addTo(map);

// Show coordinates
let c = new L.Control.Coordinates();
c.addTo(map);
map.on('click', function(e) {
	c.setCoordinates(e);
});

// Draw options for measure distance feature
var drawPluginOptions = {
    position: 'topright',
    draw: {
        polyline: {
            shapeOptions: {
                color: '#5e81ac',
                weight: 4
            }
        },
        polygon: false,
        circle: false,
        rectangle: false,
        circlemarker: false,
        marker: false
    }
};

var drawControl = new L.Control.Draw(drawPluginOptions);
map.addControl(drawControl);
L.Draw.Polyline.prototype._onTouch = L.Util.falseFn; // Fix for touchscreen

// Set the custom map
let bounds = [[0,0], [1000,1366]];
let image = L.imageOverlay('./img/map.webp', bounds).addTo(map);
map.fitBounds(bounds);


/* 
 * Alright, this thing is a real mess, need to be refactored asap
*/
DATA_MARKERS.markers.forEach(marker => {
    const confirmed = (marker.isConfirmed) ? ""  : "<div class='tooltip-tag tooltip-tag--unconfirmed'>coordinates not confirmed</div>";
    const readMore = (marker.readMoreUrl) ? "<div class='tooltip-moreinfo'><a href='" + marker.readMoreUrl + "' target='_blank'>Read more about " + marker.title + "</a></div>"  : "";
    const type = DATA_MARKERS.types.find(type => type.name === marker.type);

    L.marker(marker.coordinates, {icon: L.icon({iconUrl: 'img/markers/'+ type.icon, iconSize: type.iconSize, iconAnchor: type.iconAnchor, popupAnchor: type.popupAnchor}), maxWidth: '500', title: marker.title}).bindPopup("<div class='tooltip-image-wrapper' style='background: url(\"img/places/min/" + marker.image + "\")'><div class='tooltip-resize'><a role='button' aria-label='Open higher resolution picture' href='img/places/" + marker.image + "' target='_blank'><img width=30 alt='' src='img/markers/expand-arrows-solid.svg' /></a></div></div><div class='tooltip-content'><header class='tooltip-header'><h2>" + marker.title + "</h2><div class='tooltip-tag'>" + marker.type + "</div>" + confirmed + "</header><div>" + marker.decription + "<div class='tooltip-seenin'><strong>Seen in:</strong> "+ marker.episodes + "</div>"+ readMore + "</div></div>").addTo(map);
        
});

/*
 * Function that triggers setPath function through an input 
 *
 * @param element the input checked/unchecked by the user
*/
function togglePathCheckbox(element) {
    setPath(element.name);
}

/*
 * Function that draw or remove a path from the map
 *
 * @param element Html checkbox
*/
function setPath(element) {
    let characterName = element.name;

    if (LIST_PATHS[characterName] === undefined) {
        LIST_PATHS[characterName] = L.layerGroup(getPolylinesFromName(characterName), { snakingPause: PATH_SPEED_ANIMATION }).addTo(map).snakeIn();
    } else
    {
        LIST_PATHS[characterName].removeFrom(map);
        delete LIST_PATHS[characterName];
    }
}

/*
 * Function that refresh all polylines drawn on the map
 *
*/
function refreshTimelinePaths() {
    Object.keys(LIST_PATHS).forEach(characterName => {
        LIST_PATHS[characterName].removeFrom(map);
        LIST_PATHS[characterName] = L.layerGroup(getPolylinesFromName(characterName)).addTo(map);
    });

}

/*
 * Function that returns every polyline of a character
 *
 * @param characterName string Name of the character
 * @return array of L.Polyline
*/
function getPolylinesFromName(characterName) {
    let characterPaths, layerArray = [];

    // Season >= 100 are old movies (Lotr & Hobbits)
    characterPaths = DATA_PATHS.paths.filter(path => 
        (path.character === characterName && 
        path.season >= CURRENT_RANGE[0].season && 
        path.season <= CURRENT_RANGE[1].season &&
        path.episode >= CURRENT_RANGE[0].episode &&
        path.episode <= CURRENT_RANGE[1].episode) || (
            path.character === characterName &&
            path.season >= 100
        ));
    characterColor = DATA_PATHS.characters.find(color => color.name === characterName).color;

    characterPaths.forEach(characterPath => {
        let polyLine = L.polyline(characterPath.coordinates, {color: characterColor, weight: PATH_WEIGHT});
        layerArray.push(polyLine);
    });

    return layerArray;
}

/*
 * A11Y Function: Trigger checkbox when using keyboard on focused label
 *
 * @param event of the label                
*/
function interactionLabel(event) {
    const checkbox = event.target.control;

    if (event.keyCode === 13 || event.keyCode === 32) {
        checkbox.checked === true ? checkbox.checked = false : checkbox.checked = true;
        setPath(event.target.control);
    }
}

/*
 * Function: Hide or Show the main menu
 *           
*/
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

/*
 *  Function: Setter for episode range
 *
 * @param range Array of 2 ranges                
*/
function setCurrentRange(range) {
    if (range != null && range.length === 2) {
        CURRENT_RANGE[0] = range[0];
        CURRENT_RANGE[1] = range[1];
    }
}

/*
 *  Function: Refresh timeline
 *
 * @param range Array of 2 ranges                
*/
function timelineChange(range) {
    setCurrentRange(range);
    refreshTimelinePaths(); // Refresh all the path on the map
}

// Well well well...
function clickSauron() {
    document.getElementById('sauron__meme').classList.add('sauron__hidden');
}

// Dev, show paths on console when drawing on the map
map.on(L.Draw.Event.CREATED, function (e) {
    var layer = e.layer, output = "";

    layer.getLatLngs().forEach(element => {
        output += `[${element.lat}, ${element.lng}], `
    });

    console.log(output);
 });