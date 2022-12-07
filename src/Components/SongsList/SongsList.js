import React from "react";
import "./SongsList.scss";
import Song from "../Song/Song";

function SongsList({ songs }) {
  return (
    <div className="songs">
      {songs?.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongsList;
