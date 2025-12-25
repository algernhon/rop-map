// rop-map/js/main.js
// ==============================
// Global Handlers for Inline HTML
// ==============================

// These handlers are attached to the global `window` object so that
// any inline HTML event attributes (e.g., onclick="setPath(this)")
// can still call these functions directly from the DOM.

// Toggles a character's path on the map when the corresponding button or element is clicked
window.setPath = CharacterCheckBoxController.setPath
// Show or hide UI panels or elements
window.hideshow = UIController.hideshow;
// Display contextual labels or tooltips for interactions
window.interactionLabel = UIController.interactionLabel;
// subscribee to episode slider changing
window.timelineChange = SliderController.sliderChange;


document.addEventListener('DOMContentLoaded', () => {
    // setup the season dropdown box
    SeasonController.initDropdown();
    
    // default episode range
    AppState.CURRENT_RANGE ??= [0, 8];

    // initialising the episode slider
    SliderController.init();

    // put the default markers on the map
    MarkersController.clearMarkers();
    MarkersController.addMarkers();
});