// rop-map/js/core/uiController.js
window.UIController = (function () {

    /*
     * Function: Hide or Show the main menu
     */
    function hideshow() {
        const button = document.getElementById("main__button-input");
        const menu = document.getElementById("main");
        const timeline = document.getElementById("rangeselect");

        const isHidden = button.classList.contains('main__button-input--hidden');

        if (!isHidden) {
            button.classList.add("main__button-input--hidden");
            menu.classList.add("menu--hidden");
            timeline.classList.add("slider--hidden");
        } else {
            button.classList.remove("main__button-input--hidden");
            menu.classList.remove("menu--hidden");
            timeline.classList.remove("slider--hidden");
        }
    }

    /*
     * A11Y Function: Trigger checkbox when using keyboard on focused label
     * @param event KeyboardEvent
     */
    function interactionLabel(event) {
        const checkbox = event.target.control;

        // Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            checkbox.checked = !checkbox.checked;
            CharacterCheckBoxController.setPath(checkbox);
        }
    }

    return {
        hideshow,
        interactionLabel
    };

})();
