import { useState } from "react";

import MusicPlayer from "@/component/audio/music-player";
import Mapbox from "@/component/mapbox/mapbox";

export default function Home() {
  const [locationClicked, setLocationClicked] = useState('');


  return (
    <header>
      <div className="container mx-auto">
        <Mapbox setLocationClicked={setLocationClicked} />
        <MusicPlayer locationClicked={locationClicked} />
      </div>
    </header>
  );
}
