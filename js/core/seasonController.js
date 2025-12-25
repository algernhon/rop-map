// rop-map/js/core/seasonController.js
window.SeasonController = (function () {
    const seasonSelect = document.getElementById('seasonSelect');

    // Default season = first visible season
    let currentSeason = DATA_SEASONS.find(s => s.showInSelect);

    function initDropdown() {
        seasonSelect.innerHTML = "";

        DATA_SEASONS.forEach((season, index) => {
            if (!season.showInSelect) return;

            const option = document.createElement('option');
            option.value = index;           // IMPORTANT: original index
            option.textContent = season.name;
            seasonSelect.appendChild(option);
        });

        // Select first visible season
        seasonSelect.selectedIndex = 0;
        currentSeason = DATA_SEASONS[seasonSelect.value];

        seasonSelect.addEventListener('change', () => {
            const selectedIndex = Number(seasonSelect.value);
            currentSeason = DATA_SEASONS[selectedIndex];

            PathsController.clearPaths();
            MarkersController.clearMarkers();

            AppState.LIST_PATHS = {};

            SliderController.updateSlider(currentSeason.episodes);

            PathsController.addPaths();
            MarkersController.addMarkers();

            CharacterCheckBoxController.resetCharacterSelection();
        });
    }

    function getCurrentSeason() {
        return currentSeason;
    }

    return { initDropdown, getCurrentSeason };
})();
