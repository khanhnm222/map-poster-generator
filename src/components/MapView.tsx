import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [106.7, 10.8],
      zoom: 11,
      preserveDrawingBuffer: true, // Important for export
    });
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-xl shadow-lg"
    />
  );
}