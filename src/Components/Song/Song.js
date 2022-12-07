import React from "react";
import image_placeholder from "../../assets/images/image_placeholder.jpeg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import "./Song.scss";

const Song = ({ song }) => {
  return (
    <div className="song">
      <div className="song__thumbnail-container">
        <img
          src={song?.album_image ? song?.album_image : image_placeholder}
          alt="thumbnail"
          className="song__thumbnail"
        />
      </div>
      <p className="song__name">{song?.name || "name"}</p>
      <p className="song__duration">{song?.duration || "duration"}</p>
      <p className="song__bpm">{song?.bpm || "bpm"}</p>
      <div className="song__tags-container">
        {song?.tags.map((tag) => (
          <p className="song__tag">{tag || "tag"}</p>
        ))}
      </div>
      <div className="song__btns">
        <BsFillPlayFill className="song__icon song__play-btn" />
        <AiOutlineCloudDownload className="song__icon song__download-btn" />
      </div>
    </div>
  );
};

export default Song;
