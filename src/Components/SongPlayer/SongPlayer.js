import React from "react";
import "./SongPlayer.scss";

const SongPlayer = ({ song }) => {
  return (
    <div className="hero">
      <audio controls src="/assests/audio/05-26f.wav">
        <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a>
      </audio>
    </div>
  );
};

export default SongPlayer;
