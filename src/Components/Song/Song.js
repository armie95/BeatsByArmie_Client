import React from "react";
import image_placeholder from "../../assets/images/image_placeholder.jpeg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import "./Song.scss";

const Song = ({
  song,
  index,
  songs,
  isPlaying,
  currentSong,
  setIsPlaying,
  setCurrentSong,
}) => {
  const selectSong = () => {
    setCurrentSong(songs[index]);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentSong(songs[index]);
  };

  return (
    <div className="song">
      <div className="song__thumbnail-container" onClick={selectSong}>
        <img
          src={
            song?.album_image
              ? "http://localhost:8080/images/" + song?.album_image
              : image_placeholder
          }
          alt="thumbnail"
          className="song__thumbnail"
        />
      </div>
      <p onClick={selectSong} className="song__name">
        {song?.name || "name"}
      </p>
      <p onClick={selectSong} className="song__duration">
        {song?.duration || "duration"}
      </p>
      <p className="song__bpm">{song?.bpm || "bpm"}</p>
      <div className="song__tags-container">
        {song?.tags.map((tag, i) => (
          <p key={i} className="song__tag">
            {tag || "tag"}
          </p>
        ))}
      </div>
      <div className="song__btns">
        {currentSong.id === song.id && isPlaying ? (
          <BsFillPauseFill
            className="songList__icon song__play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          />
        ) : (
          <BsFillPlayFill
            className="songList__icon song__play-btn"
            onClick={handlePlay}
          />
        )}
        <AiOutlineCloudDownload className="song__icon song__download-btn" />
      </div>
    </div>
  );
};

export default Song;
