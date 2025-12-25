// rop-map/js/core/CharacterCheckBoxController.js
window.CharacterCheckBoxController = (function () {
    const grid = document.getElementById('pathsgrid');
    // ------------------------------
    // rebuild()
    // ------------------------------
    function rebuild() {
        const season = SeasonController.getCurrentSeason();
        const series = season.series; // "rop" or "lotr"

        grid.innerHTML = '';


        DATA_CHARACTERS.characters
        .filter(char =>
            char.series === series &&
            char.seasons.includes(season.id)
        )
        .forEach(char => {
            const id = `checkbox-${char.name.replace(/\s+/g, '')}`;
            const disabled = !PathsController.hasPaths(char.name, season.id);

            grid.insertAdjacentHTML('beforeend', `
                <div class="pathsgrid__card ${disabled ? 'is-disabled' : ''}">
                    <input type="checkbox"
                            name="${char.name}"
                            id="${id}"
                            ${disabled ? 'disabled' : ''}
                            onchange="setPath(this)" />

                    <label class="pathsgrid__label"
                            for="${id}"
                            tabindex="0"
                            onkeydown="interactionLabel(event)">
                        <img src="${char.portrait}" alt="${char.name}'s Path">
                        <p>${char.name}</p>
                    </label>
                </div>
            `);
        });
    }

    // ------------------------------
    // setPath(element)
    // Toggles a character's path on the map when the corresponding button or element is clicked
    // ------------------------------
    function setPath(element) {
        console.log("A character checkbox icon was clicked");
        PathsController.togglePath(element.name);
        MarkersController.clearMarkers();
        MarkersController.addMarkers();
    };

    // ------------------------------
    // resetCharacterSelection()
    // ------------------------------
    function resetCharacterSelection() {
        // Uncheck all UI checkboxes
        document
            .querySelectorAll('.pathsgrid input[type="checkbox"]')
            .forEach(cb => {
                cb.checked = false;
            });

        // Clear paths from the map
        PathsController.clearPaths();
    }

    return { 
        rebuild, 
        setPath,
        resetCharacterSelection
    };
})();