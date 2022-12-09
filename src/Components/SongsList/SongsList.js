import React from "react";
import "./SongsList.scss";
import Song from "../Song/Song";
import Songlist from "../../data/songs";
import { useParams } from "react-router-dom";

function SongsList() {
  const { id } = useParams();
  const songs = Songlist.filter((song) => song.playlistId == id.split(":")[1]);

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
