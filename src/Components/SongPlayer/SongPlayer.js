import React from "react";
import "./SongPlayer.scss";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import image_placeholder from "../../assets/images/image_placeholder.jpeg";

const SongPlayer = ({ currentSong, isPlaying, setIsPlaying }) => {
  return (
    <div className="songList">
      <video autoPlay loop muted className="songList__videobg">
        <source src={require("../../assets/video1.mp4")} type="video/mp4" />
      </video>
      <div className="songList__content-container">
        <div className="songList__content">
          <div className="songList__content-row">
            <img
              src={
                currentSong?.album_image
                  ? "https://beatsbyarmie.herokuapp.com/images/" +
                    currentSong?.album_image
                  : image_placeholder
              }
              alt="thumbnail"
              className="songList__thumbnail"
            />
            <div>
              <span className="songList__name">
                {currentSong?.name || "name"}
              </span>
              <br />
              <span className="songList__name">
                {currentSong?.duration || "--"}
              </span>
            </div>
          </div>
          <div className="songList__btns">
            {isPlaying ? (
              <BsFillPauseFill
                className="songList__icon songList__play-btn"
                onClick={() => setIsPlaying(false)}
              />
            ) : (
              <BsFillPlayFill
                className="songList__icon songList__play-btn"
                onClick={() => setIsPlaying(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
