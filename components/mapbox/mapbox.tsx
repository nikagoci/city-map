import {Dispatch, SetStateAction} from 'react'
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import UserLocation from "./user-location";
import { CategoryEnum, LocationInterface } from '@/libs/interfaces';

const LOCATIONS: LocationInterface[] = [
  {
    name: "Bagrati",
    coordinates: {
      longitude: 42.7043,
      latitude: 42.2772,
    },
    category: CategoryEnum.Monastery
  },
  {
    name: "Gelati",
    coordinates: {
      longitude: 42.7681,
      latitude: 42.2947,
    },
    category: CategoryEnum.Monastery
  },
  {
    name: "Motsameta",
    coordinates: {
      longitude: 42.7591,
      latitude: 42.2823,
    },
    category: CategoryEnum.Monastery
  },
  {
    name: "KutaisiBotanicalGarden",
    coordinates: {
      longitude: 42.7125,
      latitude: 42.2791
    },
    category: CategoryEnum.Garden
  },
  {
    name: "WhiteBridge",
    coordinates: {
      longitude: 42.7004,
      latitude: 42.2687
    },
    category: CategoryEnum.Bridge
  },
  {
    name: "KutaisiHistoricalMuseum",
    coordinates: {
      longitude: 42.7040,
      latitude: 42.2687
    },
    category: CategoryEnum.Museum
  },
  {
   name: "MuseumOfMilitaryGlory",
   coordinates: {
    longitude: 42.7048,
    latitude: 42.2730
   },
   category: CategoryEnum.Museum
  },
  {
    name: "Sataplia",
    coordinates: {
      longitude: 42.6733,
      latitude: 42.3156
    },
    category: CategoryEnum.Reserve
  },
  {
   name: "KolkhaFountain",
   coordinates: {
    longitude: 42.7055,
    latitude: 42.2715
   } ,
   category: CategoryEnum.Aquatica
  },
  {
    name: "GegutiPalace",
    coordinates: {
      longitude: 42.6912,
      latitude: 42.1903
    },
    category: CategoryEnum.Reserve
  }
];

interface Props {
  setLocationClicked: Dispatch<SetStateAction<string>>
}

export default function Mapbox({setLocationClicked}: Props) {

  const handleMarkerClick = (name: string) => {
    setLocationClicked(name)
  };

  function detectColor(category: CategoryEnum): string {
    switch (category){
      case CategoryEnum.Aquatica:
        return 'blue'
      case CategoryEnum.Reserve:
        return 'green'
      case CategoryEnum.Bridge:
        return 'orange'
      case CategoryEnum.Garden:
        return 'lime'
      case CategoryEnum.Monastery:
        return 'red'
      case CategoryEnum.Museum:
        return 'dark'
      default:
        return 'red'
    }
  }

  
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
      {LOCATIONS.map((location) => (
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
