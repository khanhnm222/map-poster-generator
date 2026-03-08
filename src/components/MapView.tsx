import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

interface MapViewProps {
  mapStyle: string;
  onMapLoad: (map: mapboxgl.Map) => void;
}

export default function MapView({ mapStyle, onMapLoad }: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [106.7, 10.8],
      zoom: 11,
      preserveDrawingBuffer: true, // Important for export
    });

    map.on('load', () => {
      onMapLoad(map);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setStyle(mapStyle);
    }
  }, [mapStyle]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-xl shadow-lg"
    />
  );
}