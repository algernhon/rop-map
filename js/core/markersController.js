// rop-map/js/core/markersController.js
// ==============================
// MarkersController
// ==============================
// Manages the creation, display, and removal of markers on the map.
// Markers are filtered by the currently selected season and displayed
// using Leaflet with custom icons and popups.

window.MarkersController = (function () {

    // ------------------------------
    // clearMarkers()
    // ------------------------------
    // Removes all currently displayed markers from the map and
    // clears the list of markers in AppState.
    function clearMarkers() {
        // Remove each marker from the map
        AppState.LIST_MARKERS.forEach(marker => marker.removeFrom(MapController.map));
        // Clear the array holding references to markers
        AppState.LIST_MARKERS.length = 0;
    }

    // ------------------------------
    // addMarkers()
    // ------------------------------
    // Adds markers to the map based on the currently selected season.
    // Only markers relevant to the selected season are displayed.
    function addMarkers() {
        // Get the currently selected season
        const currentSeason = SeasonController.getCurrentSeason();
        const [from, to] = AppState.CURRENT_RANGE;

        // Loop through all markers defined in DATA_MARKERS
        DATA_MARKERS.markers.forEach(marker => {
            
            // Skip markers that are not relevant to the current season
            const matchesSeason = currentSeason.markersRelevant(marker);
            const matchesEpisodeRange = marker.episodes.some(e =>
                e.season === currentSeason.id &&
                e.episode >= from &&
                e.episode <= to
            );
            if (!matchesSeason || !matchesEpisodeRange) return;

            // Find marker type information (icon, size, anchor points)
            const type = DATA_MARKER_TYPES.types.find(t => t.name === marker.type);

            // Create a Leaflet marker at the marker's coordinates
            const leafletMarker = L.marker(marker.coordinates, {
                icon: L.icon({
                    iconUrl: `img/markers/${type.icon}`,  // path to the icon image
                    iconSize: type.iconSize,              // size of the icon
                    iconAnchor: type.iconAnchor,          // anchor point for the icon
                    popupAnchor: type.popupAnchor         // anchor point for the popup
                }),
                title: marker.title  // tooltip title when hovering over the marker
            }).bindPopup(
                // HTML content for the popup
                `<div class='tooltip-image-wrapper' style='background:url("img/places/min/${marker.image}")'>
                    <div class='tooltip-resize'>
                        <a href='img/places/${marker.image}' target='_blank'>
                            <img width='30' src='img/markers/expand-arrows-solid.svg' />
                        </a>
                    </div>
                </div>
                <div class='tooltip-content'>
                    <header class='tooltip-header'>
                        <h2>${marker.title}</h2>
                        <div class='tooltip-tag'>${marker.type}</div>
                        ${marker.isConfirmed ? '' : "<div class='tooltip-tag tooltip-tag--unconfirmed'>coordinates not confirmed</div>"}
                    </header>
                    <div>
                        ${marker.decription} <!-- Marker description -->
                        <div class='tooltip-seenin'>
                            <strong>Seen in:</strong> 
                            ${marker.episodes.map(e => {
                                // Format the episodes in which this marker appears
                                if (e.season === 100) return "The Lord of the Rings (Movies)";
                                if (e.season === 104) return "The Hobbit (Movies)";
                                return `S0${e.season}E0${e.episode}`; // Standard season/episode format
                            }).join(", ")}
                        </div>
                        ${marker.readMoreUrl ? `<div class='tooltip-moreinfo'><a href='${marker.readMoreUrl}' target='_blank'>Read more about ${marker.title}</a></div>` : ''}
                    </div>
                </div>`
            )
            // Add the marker to the map
            .addTo(MapController.map);

            // Store the marker reference in AppState for later clearing or updates
            AppState.LIST_MARKERS.push(leafletMarker);
        });
    }

    // Expose public functions
    return { 
        clearMarkers,  // Function to remove all markers
        addMarkers     // Function to add markers for the current season
    };

})();
