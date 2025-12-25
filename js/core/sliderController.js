// rop-map/js/core/sliderController.js
window.SliderController = (function () {
    let slider;

    // ------------------------------
    // createSlider(count)
    // ------------------------------
    function createSlider(count) {
        if (slider.noUiSlider) {
            slider.noUiSlider.destroy();
        }

        noUiSlider.create(slider, {
            start: [0, count],
            connect: true,
            step: 1,
            range: { min: 0, max: count },
            pips: {
                mode: 'steps',
                density: 100,
                filter: () => 2,
                format: {
                    to: value => (value === 0 ? 'Prologue' : `Episode ${value}`),
                    from: value => Number(value)
                }
            }
        });

        slider.noUiSlider.on('update', values => {
            sliderChange([Number(values[0]), Number(values[1])]);
        });
    }

    // ------------------------------
    // init()
    // ------------------------------
    function init() {
        slider = document.getElementById('slider');

        const season = SeasonController.getCurrentSeason();
        createSlider(season.episodes);
    }

    // ------------------------------
    // updateSlider(newCount)
    // ------------------------------
    function updateSlider(newCount) {
        createSlider(newCount);
    }

    // ------------------------------
    // sliderChange(range)
    // ------------------------------
    function sliderChange(range) {
        AppState.CURRENT_RANGE = range;

        PathsController.clearPaths();
        PathsController.addPaths();

        MarkersController.clearMarkers();
        MarkersController.addMarkers();
    }

    return {
        init,
        updateSlider,
        sliderChange
    };
})();
