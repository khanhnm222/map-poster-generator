interface MapStylesProps {
    mapStyle: string;
    onMapStyleChange: (style: string) => void;
}

const MAP_STYLES = [
    { label: "Light", value: "mapbox://styles/mapbox/light-v11" },
    { label: "Dark", value: "mapbox://styles/mapbox/dark-v11" },
    { label: "Streets", value: "mapbox://styles/mapbox/streets-v12" },
    { label: "Outdoors", value: "mapbox://styles/mapbox/outdoors-v12" },
    { label: "Satellite", value: "mapbox://styles/mapbox/satellite-v9" },
    { label: "Satellite Streets", value: "mapbox://styles/mapbox/satellite-streets-v12" },
    { label: "Navigation Day", value: "mapbox://styles/mapbox/navigation-day-v1" },
    { label: "Navigation Night", value: "mapbox://styles/mapbox/navigation-night-v1" },
];

export default function MapStyles({ mapStyle, onMapStyleChange }: MapStylesProps) {
    return (
        <div className="space-y-4">
            <div>
                <label className="float-left block font-bold mb-1">
                    Map Style
                </label>
                <select
                    value={mapStyle}
                    onChange={(e) => onMapStyleChange(e.target.value)}
                    className="w-full border rounded px-3 py-2 cursor-pointer"
                >
                    {MAP_STYLES.map((style) => (
                        <option key={style.value} value={style.value}>
                            {style.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
