import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { useRouter } from "next/router";

import "mapbox-gl/dist/mapbox-gl.css";

import UserLocation from "./user-location";
import { CategoryEnum, LocationInterface } from "@/libs/interfaces";
import detectColor from "@/libs/colorDetector";

interface Props {
  setLocationClicked: Dispatch<SetStateAction<string>>;
  categorySelected: CategoryEnum[];
  landmarks: LocationInterface[];
  setCategorySelected: Dispatch<SetStateAction<CategoryEnum[]>>
}

export default function Mapbox({
  setLocationClicked,
  categorySelected,
  landmarks,
  setCategorySelected
}: Props) {

  const router = useRouter()

  const handleMarkerClick = (name: string) => {
    setLocationClicked(name);
  };

  useEffect(() => {
    if(categorySelected.length === 0){
      router.replace('/')
    } else {
      router.push({
        pathname: "/",
        query: {category: categorySelected.join('.')}
      })
    }
  }, [categorySelected])

  useEffect(() => {
    const queryCategory = router.query.category as string | undefined;
    if (queryCategory) {
      const selectedCategories = queryCategory.split(".") as CategoryEnum[];

      setCategorySelected(selectedCategories);
    } else {
      setCategorySelected([]);
      
    }
  }, [router.query.category]);

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
      {landmarks.map((location) => (
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
