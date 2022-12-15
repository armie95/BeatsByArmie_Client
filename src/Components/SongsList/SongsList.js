import React from "react";
import axios from "axios";
import "./SongsList.scss";
import Song from "../Song/Song";
import { useParams } from "react-router-dom";
import SongPlayer from "../SongPlayer/SongPlayer";
function SongsList() {
  const { id } = useParams();
  const linkAudio = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songs, setSongs] = React.useState([]);
  const [currentSong, setCurrentSong] = React.useState(null);

  React.useEffect(() => {
    axios({
      url: "https://beatsbyarmie.herokuapp.com/playlistSongs" + id,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setSongs(response.data);
        setCurrentSong(response.data[0]);
      })
      .catch((error) => console.log(error, "somethign went wrong!"));
  }, [id]);

  React.useEffect(() => {
    if (isPlaying) linkAudio.current.play();
    else linkAudio.current.pause();
  }, [isPlaying, currentSong]);

  return (
    <div className="songs">
      <audio
        src={"https://beatsbyarmie.herokuapp.com/audio/" + currentSong?.wavfile}
        ref={linkAudio}
      />

      <SongPlayer
        isPlaying={isPlaying}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
      />

      <div className="songs__heading">Latest Album</div>

      {songs?.map((song) => (
        <Song
          song={song}
          key={song.id}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      ))}
    </div>
  );
}

export default SongsList;
