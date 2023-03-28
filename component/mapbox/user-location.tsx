import { useEffect, useState } from "react";
import { Marker } from "react-map-gl";
import { MdMyLocation } from "react-icons/md";

export default function UserLocation() {
  const [curPosition, setCurPosition] = useState<{
    long: number;
    lat: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setCurPosition(() => ({
        long: position.coords.longitude,
        lat: position.coords.latitude,
      }))
    );
  }, []);


  return (
    <>
      {curPosition && (
        <Marker latitude={curPosition.lat} longitude={curPosition.long}>
           <MdMyLocation size={40} color="blue" className='current-location' />
        </Marker>
      )}
    </>
  );
}
