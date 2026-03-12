import { useState } from "react";
import MapView from "./components/MapView";
import PosterControls from "./components/PosterControls";
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { applyTheme } from "./utils/applyTheme";
import type { MapTheme } from "./types/theme";

export default function App() {
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/light-v11");
  const [map, setMap] = useState<mapboxgl.Map | null>(
    null
  );

  const [activeTheme, setActiveTheme] = useState<MapTheme | null>(null);

  const handleThemeChange = (theme: MapTheme | null) => {
    setActiveTheme(theme);
    if (!map) return;

    if (theme) {
      applyTheme(map, theme);
    } else {
      // Revert to original map style
      map.setStyle(mapStyle);
    }
  };

  const handleExport = () => {
    if (!map) return;
    const canvas = map.getCanvas();
    const dataURL = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'map-poster.png';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Map Poster Generator
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100dvh-6.5rem)]">
        {/* Controls */}
        <div className="bg-white p-4 rounded-xl shadow">
          <PosterControls activeTheme={activeTheme} mapStyle={mapStyle} onMapStyleChange={setMapStyle} onThemeChange={handleThemeChange} onExport={handleExport} />
        </div>
        {/* Map Preview */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow h-full min-h-[600px]">
          <MapView mapStyle={mapStyle} onMapLoad={setMap} />
        </div>
      </div>
    </div>
  );
}