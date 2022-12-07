import React from "react";
import "./SongsList.scss";
import Song from "../Song/Song";

function SongsList({ songs }) {
  return (
    <div className="songs">
      <div className="songs__headers">
        <div className="songs_header">Title</div>
        <div className="songs_header">time</div>
        <div className="songs_header">bpm</div>
        <div className="songs_header">tags</div>
      </div>
      {songs?.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongsList;
