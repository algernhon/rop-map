// rop-map/js/core/pathsController.js

window.PathsController = (function () {
    // ------------------------------
    // togglePath(characterName)
    // ------------------------------
    function togglePath(characterName) {
        const paths = AppState.LIST_PATHS;
        const currentSeason = SeasonController.getCurrentSeason();

        if (!paths[characterName]) {
            const layer = L.layerGroup(
                getPolylinesFromName(characterName, currentSeason.id),
                { snakingPause: AppState.PATH_SPEED_ANIMATION }
            ).addTo(MapController.map);

            layer.snakeIn(); // animate first add
            paths[characterName] = layer;
        } else {
            paths[characterName].removeFrom(MapController.map);
            delete paths[characterName];
        }
    }

    // ------------------------------
    // clearPaths()
    // ------------------------------
    function clearPaths() {
        Object.keys(AppState.LIST_PATHS).forEach(characterName => {
            AppState.LIST_PATHS[characterName].removeFrom(MapController.map);
        });
    }

    // ------------------------------
    // addPaths()
    // ------------------------------
    function addPaths() {
        const currentSeason = SeasonController.getCurrentSeason();

        Object.keys(AppState.LIST_PATHS).forEach(characterName => {
            AppState.LIST_PATHS[characterName] = L.layerGroup(
                getPolylinesFromName(characterName, currentSeason.id)
            ).addTo(MapController.map);
        });
    }
    
    // ------------------------------
    // hasPaths(characterName, seasonId)
    // ------------------------------
    function hasPaths(characterName, seasonId) {
        return DATA_PATHS.paths.some(p =>
            p.character === characterName &&
            (p.season === seasonId || p.season >= 100)
        );
    }

    // ------------------------------
    // getPolylinesFromName(characterName, seasonId)
    // ------------------------------
    function getPolylinesFromName(characterName, seasonId) {
        const [from, to] = AppState.CURRENT_RANGE;

        const filteredPaths = DATA_PATHS.paths.filter(p =>
            p.character === characterName &&
            (p.season === seasonId || p.season >= 100) &&
            p.episode >= from &&
            p.episode <= to
        );

        const color = DATA_CHARACTERS.characters.find(c => c.name === characterName).color;

        return filteredPaths.map(p =>
            L.polyline(p.coordinates, {
                color,
                weight: AppState.PATH_WEIGHT,
                dashArray: p.isConfirmed ? '0' : '2 6',
                opacity: p.isConfirmed ? 1 : 0.7
            })
        );
    }

    return {
        togglePath,
        clearPaths,
        addPaths,
        hasPaths
    };

})();
