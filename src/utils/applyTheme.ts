import type { MapTheme } from "../types/theme";

export function applyTheme(
    map: mapboxgl.Map,
    theme: MapTheme
) {
    if (!map.isStyleLoaded()) return;

    const layers = map.getStyle().layers;

    if (!layers) return;

    layers.forEach((layer) => {
        const id = layer.id;

        /* 🌊 Water */
        if (id.includes("water")) {
            map.setPaintProperty(id, "fill-color", theme.water);
        }

        /* 🌳 Parks */
        if (id.includes("park") || id.includes("green")) {
            map.setPaintProperty(id, "fill-color", theme.parks);
        }

        /* 🛣️ Roads */
        if (id.includes("road")) {
            let color = theme.road_default;

            if (id.includes("motorway")) color = theme.road_motorway;
            if (id.includes("primary")) color = theme.road_primary;
            if (id.includes("secondary")) color = theme.road_secondary;
            if (id.includes("tertiary")) color = theme.road_tertiary;
            if (id.includes("residential")) color = theme.road_residential;

            map.setPaintProperty(id, "line-color", color);
        }

        /* 🏙️ Background */
        if (layer.type === "background") {
            map.setPaintProperty(
                id,
                "background-color",
                theme.bg
            );
        }
    });
}