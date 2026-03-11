import { useState } from "react";
import MapView from "./components/MapView";
import PosterControls from "./components/PosterControls";
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/light-v11");
  const [map, setMap] = useState<mapboxgl.Map | null>(
    null
  );
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Map Poster Generator
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100dvh-6.5rem)]">
        {/* Controls */}
        <div className="bg-white p-4 rounded-xl shadow">
          <PosterControls
            mapStyle={mapStyle}
            onMapStyleChange={setMapStyle}
          />
        </div>
        {/* Map Preview */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow h-full min-h-[600px]">
          <MapView mapStyle={mapStyle} onMapLoad={setMap} />
        </div>
      </div>
    </div>
  );
}