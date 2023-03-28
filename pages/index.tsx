import AudioPlayer from "@/component/audio/audio-player";
import Mapbox from "@/component/mapbox/mapbox";

export default function Home() {
  return (
    <header>
      <div className="container mx-auto">
        <Mapbox />
        <AudioPlayer />
      </div>
    </header>
  );
}
