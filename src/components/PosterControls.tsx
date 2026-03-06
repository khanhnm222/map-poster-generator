import { useState } from "react";

export default function PosterControls() {
  const [title, setTitle] = useState("Ho Chi Minh City");

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">
          Poster Title
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Export Poster
      </button>
    </div>
  );
}