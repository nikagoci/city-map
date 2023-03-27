import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import UserLocation from "./user-location";

const fakeData = [
  {
    name: "Bagrati",
    coordinates: {
      longitude: 42.7043,
      latitude: 42.2772,
    },
  },
  {
    name: "Gelati",
    coordinates: {
      longitude: 42.7681,
      latitude: 42.2947,
    },
  },
  {
    name: "Motsameta",
    coordinates: {
      longitude: 42.7591,
      latitude: 42.2823,
    },
  },
];

export default function Mapbox() {

  const handleMarkerClick = (name: string) => {
    console.log(name);
  };

  
  return (
    <Map
      initialViewState={{
        longitude: 42.705123,
        latitude: 42.265984,
        zoom: 12,
      }}
      style={{ width: "100%", height: 800 }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
    >
      <UserLocation />
      {fakeData.map((data) => (
        <Marker
          key={data.name}
          color="red"
          longitude={data.coordinates.longitude}
          latitude={data.coordinates.latitude}
          onClick={() => handleMarkerClick(data.name)}
        />
      ))}
    </Map>
  );
}
