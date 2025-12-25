// rop-map/js/core/mapController.js
window.MapController = (function () {

    const map = L.map('map', {
        crs: L.CRS.Simple,
        attributionControl: false,
        zoom: 0,
        minZoom: -1,
        maxZoom: 4,
        zoomControl: false
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    const c = new L.Control.Coordinates();
    c.addTo(map);
    map.on('click', e => c.setCoordinates(e));

    const bounds = [[0, 0], [1000, 1366]];
    L.imageOverlay('./img/map.webp', bounds).addTo(map);
    map.setView([500, 683]);

    // Draw tool
    const drawControl = new L.Control.Draw({
        position: 'topright',
        draw: {
            polyline: { shapeOptions: { color: '#5e81ac', weight: 4 } },
            polygon: false,
            circle: false,
            rectangle: false,
            circlemarker: false,
            marker: false
        }
    });

    map.addControl(drawControl);
    L.Draw.Polyline.prototype._onTouch = L.Util.falseFn;

    // Dev helper
    map.on(L.Draw.Event.CREATED, function (e) {
        let output = "";
        e.layer.getLatLngs().forEach(p => {
            output += `[${p.lat}, ${p.lng}], `;
        });
        console.log(output);
    });

    return { map };

})();



// Now everywhere you used `map`, call 
/*
MapController.map
*/