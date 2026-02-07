"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Globe } from "lucide-react";

type Place = {
  name: string;
  country: string;
  lat: number;
  lng: number;
};

// Leaflet type declarations
declare global {
  interface Window {
    L?: LeafletNamespace;
  }
}

interface LeafletNamespace {
  map: (element: HTMLElement) => LeafletMap;
  tileLayer: (
    url: string,
    options: Record<string, unknown>,
  ) => LeafletTileLayer;
  marker: (
    latlng: [number, number],
    options?: { icon?: unknown },
  ) => LeafletMarker;
  divIcon: (options: {
    className?: string;
    html?: string;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
  }) => unknown;
}

interface LeafletMap {
  setView: (latlng: [number, number], zoom: number) => LeafletMap;
}

interface LeafletTileLayer {
  addTo: (map: LeafletMap) => LeafletTileLayer;
}

interface LeafletMarker {
  addTo: (map: LeafletMap) => LeafletMarker;
  bindPopup: (content: string) => LeafletMarker;
  on: (event: string, handler: () => void) => void;
}

// Coordinates for all places
const places: Place[] = [
  // Nepal - Major cities shown
  { name: "Birtamode", country: "Nepal", lat: 26.6346, lng: 87.9892 },
  { name: "Ilam", country: "Nepal", lat: 26.9107, lng: 87.9312 },
  { name: "Biratnagar", country: "Nepal", lat: 26.4525, lng: 87.2718 },
  { name: "Dharan", country: "Nepal", lat: 26.8124, lng: 87.2831 },
  { name: "Itahari", country: "Nepal", lat: 26.6646, lng: 87.2719 },
  { name: "Okhaldhunga", country: "Nepal", lat: 27.3117, lng: 86.5052 },
  { name: "Phaplu", country: "Nepal", lat: 27.5165, lng: 86.5862 },
  { name: "Rajbiraj", country: "Nepal", lat: 26.5447, lng: 86.751 },
  { name: "Janakpur", country: "Nepal", lat: 26.7271, lng: 85.9229 },
  { name: "Jaleshwar", country: "Nepal", lat: 26.6477, lng: 85.7951 },
  { name: "Hetauda", country: "Nepal", lat: 27.4277, lng: 85.0297 },
  { name: "Birgunj", country: "Nepal", lat: 27.013, lng: 84.8773 },
  { name: "Bharatpur", country: "Nepal", lat: 27.6833, lng: 84.4333 },
  { name: "Sauraha", country: "Nepal", lat: 27.5768, lng: 84.4947 },
  { name: "Bandipur", country: "Nepal", lat: 27.935, lng: 84.4144 },
  { name: "Manakamana", country: "Nepal", lat: 27.9044, lng: 84.5843 },
  { name: "Gorkha Bazar", country: "Nepal", lat: 28.0017, lng: 84.6297 },
  { name: "Chhabdi", country: "Nepal", lat: 27.9891, lng: 84.3411 },
  { name: "Damauli", country: "Nepal", lat: 27.971, lng: 84.2882 },
  { name: "Pokhara", country: "Nepal", lat: 28.2096, lng: 83.9856 },
  { name: "Baglung", country: "Nepal", lat: 28.2719, lng: 83.5912 },
  { name: "Beni", country: "Nepal", lat: 28.3448, lng: 83.5651 },
  { name: "Jomsom", country: "Nepal", lat: 28.7845, lng: 83.7381 },
  { name: "Dhumpha", country: "Nepal", lat: 28.7611, lng: 83.7251 },
  { name: "Muktinath", country: "Nepal", lat: 28.8167, lng: 83.8718 },
  { name: "Kagbeni", country: "Nepal", lat: 28.8351, lng: 83.7843 },
  { name: "Chhusang", country: "Nepal", lat: 28.9161, lng: 83.8163 },
  { name: "Lo Monthang", country: "Nepal", lat: 29.1827, lng: 83.9568 },
  { name: "Kora La", country: "Nepal", lat: 29.3195, lng: 83.9922 },
  { name: "Bhairahawa", country: "Nepal", lat: 27.5019, lng: 83.4485 },
  { name: "Butwal", country: "Nepal", lat: 27.7006, lng: 83.4484 },
  { name: "Tansen", country: "Nepal", lat: 27.8633, lng: 83.5484 },
  { name: "Kohalpur", country: "Nepal", lat: 28.1904, lng: 81.688 },
  { name: "Nepalgunj", country: "Nepal", lat: 28.05, lng: 81.6167 },
  { name: "Birendranagar", country: "Nepal", lat: 28.5991, lng: 81.6067 },
  { name: "Dhangadhi", country: "Nepal", lat: 28.6844, lng: 80.6083 },
  { name: "Dipayal", country: "Nepal", lat: 29.2612, lng: 80.9388 },
  { name: "Gamgadhi", country: "Nepal", lat: 29.6053, lng: 82.0963 },
  { name: "Rara Lake", country: "Nepal", lat: 29.5265, lng: 82.0808 },
  { name: "Ruga", country: "Nepal", lat: 29.6105, lng: 82.1624 },

  // India
  { name: "New Delhi", country: "India", lat: 28.6139, lng: 77.209 },
  { name: "Dharamshala", country: "India", lat: 32.219, lng: 76.3234 },

  // Sri Lanka
  { name: "Colombo", country: "Sri Lanka", lat: 6.9271, lng: 79.8612 },
  { name: "Negombo", country: "Sri Lanka", lat: 7.2083, lng: 79.8358 },
  { name: "Matara", country: "Sri Lanka", lat: 5.9485, lng: 80.5353 },

  // Thailand
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 },
  { name: "Pattaya", country: "Thailand", lat: 12.9236, lng: 100.8825 },
  { name: "Phuket", country: "Thailand", lat: 7.8804, lng: 98.3923 },
  { name: "Ayutthaya", country: "Thailand", lat: 14.3532, lng: 100.5772 },

  // Vietnam
  { name: "Halong Bay", country: "Vietnam", lat: 20.9101, lng: 107.1839 },
  { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297 },

  // Indonesia
  { name: "Bali", country: "Indonesia", lat: -8.4095, lng: 115.1889 },

  // South Africa
  { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241 },

  // Switzerland
  { name: "Geneva", country: "Switzerland", lat: 46.2044, lng: 6.1432 },
  { name: "Nyon", country: "Switzerland", lat: 46.3833, lng: 6.2394 },

  // France
  { name: "Yvoire", country: "France", lat: 46.3708, lng: 6.3267 },

  // Netherlands
  { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041 },
  { name: "Leiden", country: "Netherlands", lat: 52.1601, lng: 4.497 },
  { name: "Zandvoort", country: "Netherlands", lat: 52.373, lng: 4.5339 },

  // United Kingdom
  { name: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
  { name: "York", country: "United Kingdom", lat: 53.9591, lng: -1.0815 },
  { name: "Leeds", country: "United Kingdom", lat: 53.8008, lng: -1.5491 },
  { name: "Oxford", country: "United Kingdom", lat: 51.752, lng: -1.2577 },
  { name: "Glasgow", country: "United Kingdom", lat: 55.8642, lng: -4.2518 },

  // Canada
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207 },

  // USA
  { name: "Denver", country: "United States", lat: 39.7392, lng: -104.9903 },
  { name: "Las Vegas", country: "United States", lat: 36.1699, lng: -115.1398 },
];

export default function TravelMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.L) return;

    // Create map
    const L = window.L;
    const map = L.map(mapRef.current).setView([20, 0], 2);

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon
    const redIcon = L.divIcon({
      className: "custom-marker",
      html: '<div style="background-color: #dc2626; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });

    // Add markers
    places.forEach((place) => {
      const marker = L.marker([place.lat, place.lng], { icon: redIcon }).addTo(
        map,
      ).bindPopup(`
          <div style="padding: 8px; min-width: 150px;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #dc2626; font-size: 14px;">${place.name}</h3>
            <p style="margin: 0; color: #666; font-size: 12px;">${place.country}</p>
          </div>
        `);

      marker.on("click", () => {
        setSelectedPlace(place);
      });
    });
  };

  // Group places by country
  const countryCounts = places.reduce(
    (acc, place) => {
      acc[place.country] = (acc[place.country] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const countries = Object.keys(countryCounts);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <Globe className="w-8 h-8 mx-auto mb-2 text-red-700" />
          <div className="text-2xl font-bold text-gray-900">
            {countries.length}
          </div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <MapPin className="w-8 h-8 mx-auto mb-2 text-red-700" />
          <div className="text-2xl font-bold text-gray-900">
            {places.length}
          </div>
          <div className="text-sm text-gray-600">Major Places</div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div ref={mapRef} className="w-full h-[500px] md:h-[600px]" />
      </div>

      {/* Country List */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Countries Visited
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {countries.sort().map((country) => (
            <div
              key={country}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-700 font-medium">{country}</span>
              <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                {countryCounts[country]}{" "}
                {countryCounts[country] > 1 ? "places" : "place"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Place Info */}
      {selectedPlace && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-red-700 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-900">{selectedPlace.name}</h4>
              <p className="text-sm text-red-700">{selectedPlace.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
