import { useState } from "react";
import { GetStaticProps } from "next";

import MusicPlayer from "@/components/audio/music-player";
import Mapbox from "@/components/mapbox/mapbox";
import FilterMenu from "@/components/filter/filter-menu";
import { CategoryEnum, LocationInterface } from "@/libs/interfaces";
import { getLandmarks } from "@/libs/prisma/landmarks";

interface Props {
  landmarks: LocationInterface[]
}

export default function Home({landmarks}: Props) {
  const [locationClicked, setLocationClicked] = useState("");
  const [categorySelected, setCategorySelected] = useState<CategoryEnum[]>([]);

  return (
    <header>
      <div className="flex w-full px-12 mt-12 gap-x-4">
        <div className="basis-[85%]">
          <Mapbox
            setLocationClicked={setLocationClicked}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            landmarks={landmarks}
          />
          <MusicPlayer locationClicked={locationClicked} />
        </div>
        <FilterMenu setCategorySelected={setCategorySelected} />
      </div>
    </header>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const landmarks = await getLandmarks();

    return {
      props: {
        landmarks
      },
    };
  } catch (err: any) {
    throw new Error(err);
  }

  
};
