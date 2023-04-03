import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import UserLocation from "./user-location";
import { CategoryEnum, LocationInterface } from "@/libs/interfaces";
import detectColor from "@/libs/colorDetector";

interface Props {
  setLocationClicked: Dispatch<SetStateAction<string>>;
  categorySelected: CategoryEnum[];
  landmarks: LocationInterface[];
}

export default function Mapbox({
  setLocationClicked,
  categorySelected,
  landmarks
}: Props) {
  const [allLocation, setAllLocation] =
    useState<LocationInterface[]>(landmarks);

  const handleMarkerClick = (name: string) => {
    setLocationClicked(name);
  };

  useEffect(() => {
    if (categorySelected.length > 0) {
      const filteredLocations = landmarks.filter((location) =>
        categorySelected.includes(location.category)
      );
      setAllLocation(filteredLocations);
    } else {
      setAllLocation(landmarks);
    }
  }, [categorySelected]);

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
      {allLocation.map((location) => (
        <Marker
          key={location.name}
          color={detectColor(location.category)}
          longitude={location.coordinates.longitude}
          latitude={location.coordinates.latitude}
          onClick={() => handleMarkerClick(location.name)}
        />
      ))}
    </Map>
  );
}
