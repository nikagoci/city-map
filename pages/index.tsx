import { useState } from "react";

import MusicPlayer from "@/components/audio/music-player";
import Mapbox from "@/components/mapbox/mapbox";
import FilterMenu from "@/components/filter/filter-menu";
import { CategoryEnum } from "@/libs/interfaces";

export default function Home() {
  const [locationClicked, setLocationClicked] = useState("");
  const [categorySelected, setCategorySelected] = useState<CategoryEnum[] | []>([]);

  console.log(categorySelected)

  return (
    <header>
      <div className="flex w-full px-12 mt-12 gap-x-4">
        <div className="basis-[85%]">
          <Mapbox setLocationClicked={setLocationClicked} />
          <MusicPlayer locationClicked={locationClicked} />
        </div>
        <FilterMenu setCategorySelected={setCategorySelected} />
      </div>
    </header>
  );
}
