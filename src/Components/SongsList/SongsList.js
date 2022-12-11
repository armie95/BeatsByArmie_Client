import React from "react";
import axios from "axios";
import "./SongsList.scss";
import Song from "../Song/Song";
import { useParams } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import image_placeholder from "../../assets/images/image_placeholder.jpeg";

function SongsList() {
  const { id } = useParams();
  const linkAudio = React.useRef();
  const [songs, setSongs] = React.useState([]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState(null);

  React.useEffect(() => {
    axios({
      url: "http://localhost:8080/playlistSongs" + id,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setSongs(response.data);
        setCurrentSong(response.data[0]);
      })
      .catch((error) => alert(error, "somethign went wrong!"));
  }, [id]);

  React.useEffect(() => {
    if (isPlaying) {
      linkAudio.current.play();
    } else {
      linkAudio.current.pause();
    }
  }, [isPlaying, currentSong]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="songs">
      <div className="songs__headers">
        <div className="songs_header">Title</div>
        <div className="songs_header">time</div>
        <div className="songs_header">bpm</div>
        <div className="songs_header">tags</div>
      </div>

      <hr />

      <audio
        src={"http://localhost:8080/audio/" + currentSong?.wavfile}
        ref={linkAudio}
      >
        <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a>
      </audio>

      <div className="songList">
        <video autoPlay loop muted className="songList__videobg">
          <source src={require("../../assets/video.mp4")} type="video/mp4" />
        </video>
        <div className="songList__thumbnail-container">
          <img
            src={
              currentSong?.album_image
                ? "http://localhost:8080/images/" + currentSong?.album_image
                : image_placeholder
            }
            alt="thumbnail"
            className="songList__thumbnail"
          />
        </div>
        <p className="songList__name">{currentSong?.name || "name"}</p>
        <p className="songList__duration">
          {currentSong?.duration || "duration"}
        </p>
        <p className="songList__bpm">{currentSong?.bpm || "bpm"}</p>
        <div className="songList__btns">
          {isPlaying ? (
            <BsFillPauseFill
              className="songList__icon songList__play-btn"
              onClick={handlePlay}
            />
          ) : (
            <BsFillPlayFill
              className="songList__icon songList__play-btn"
              onClick={handlePlay}
            />
          )}
          <AiOutlineCloudDownload className="songList__icon songList__download-btn" />
        </div>
        <div className="songList__tags-container">
          {currentSong?.tags.map((tag, i) => (
            <p className="songList__tag" key={i}>
              {tag || "tag"}
            </p>
          ))}
        </div>
      </div>

      {songs?.map((song, index) => (
        <Song
          key={song.id}
          index={index}
          songs={songs}
          song={song}
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
