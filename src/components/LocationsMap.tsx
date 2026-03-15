"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

export type MapLocation = {
  id: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
};

type Props = {
  locations: MapLocation[];
};

export default function LocationsMap({ locations }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || locations.length === 0) return;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (!containerRef.current) return;

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      delete (containerRef.current as Record<string, unknown>)._leaflet_id;

      const map: LeafletMap = L.map(containerRef.current, {
        scrollWheelZoom: true,
      }).setView([39.7, -75.4], 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const purpleIcon = L.divIcon({
        className: "ypp-marker",
        html: `<span style="
          display: block;
          width: 24px;
          height: 24px;
          background: #6b21c8;
          border: 2px solid #fff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></span>`,
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      });

      const bounds: [number, number][] = [];
      locations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng], { icon: purpleIcon })
          .addTo(map)
          .bindPopup(
            `<div style="min-width: 140px; font-family: system-ui, sans-serif;">
              <strong>${loc.city}</strong><br/>
              <span style="color: #6b5f7a;">${loc.state}</span>
            </div>`
          );
        bounds.push([loc.lat, loc.lng]);
      });

      if (bounds.length > 0) {
        map.fitBounds(bounds as [number, number][], {
          padding: [24, 24],
          maxZoom: 10,
        });
      }

      mapRef.current = map;
    };

    initMap();
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [locations]);

  return (
    <div
      ref={containerRef}
      className="h-full min-h-[240px] w-full rounded-lg"
      aria-label="Map of in-person program locations"
    />
  );
}
