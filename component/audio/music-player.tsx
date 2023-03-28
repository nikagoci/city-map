import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";

interface Props {
  locationClicked: string;
}

export default function MusicPlayer({ locationClicked }: Props) {
  return (
    <>
      {locationClicked && <AudioPlayer src={`sounds/${locationClicked}.mp3`} autoPlay />}
    </>
  );
}
