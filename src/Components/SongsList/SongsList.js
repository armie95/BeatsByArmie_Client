import React, { useState, useRef, useEffect } from "react";
import "./SongsList.scss";
import Song from "../Song/Song";
import Songlist from "../../data/songs";
import { useParams } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import image_placeholder from "../../assets/images/image_placeholder.jpeg";

function SongsList() {
  const { id } = useParams();
  const linkAudio = useRef();

  const songs = Songlist.filter((song) => song.playlistId == id.split(":")[1]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  useEffect(() => {
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
        <div className="songList__thumbnail-container">
          <img
            src={
              currentSong?.album_image
                ? currentSong?.album_image
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
