import { useState } from "react";
import MapStyles from "./MapStyles";

interface PosterControlsProps {
  mapStyle: string;
  onMapStyleChange: (style: string) => void;
}

export default function PosterControls({ mapStyle, onMapStyleChange }: PosterControlsProps) {
  const [title, setTitle] = useState("Ho Chi Minh City");


  return (
    <div className="space-y-4">
      <div>
        <label className="float-left block font-bold mb-1">
          Poster Title
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <MapStyles mapStyle={mapStyle} onMapStyleChange={onMapStyleChange} />

      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Export Poster
      </button>
    </div>
  );
}
