import React from "react";
import axios from "axios";
import "./SongsList.scss";
import Song from "../Song/Song";
import { useParams } from "react-router-dom";
import SongPlayer from "../SongPlayer/SongPlayer";
import CommentsSection from "../CommentsSection/CommentsSection";
import NewCommentForm from "../NewCommentForm/NewCommentForm";

function SongsList() {
  const { id } = useParams();
  const linkAudio = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songs, setSongs] = React.useState([]);
  const [currentSong, setCurrentSong] = React.useState(null);
  const [playlist, setPlaylist] = React.useState([]);
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    axios({
      url: "http://localhost:8080/playlistSongs" + id,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setSongs(response.data.songs);
        setCurrentSong(response.data.songs[0]);
        setPlaylist(response.data.playlist);
      })
      .catch((error) => console.log(error, "somethign went wrong!"));
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8080/addComment",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { comment, id },
    })
      .then((response) => {
        console.log("response.data", response.data);
        setPlaylist(response.data.playlist);
        setSongs(response.data.songs);
        setCurrentSong(response.data.songs[0]);
        setComment("");
      })
      .catch((error) => console.log(error, "somethign went wrong!"));
  };

  const handleShuffle = (e) => {
    e.preventDefault();
    let newFormat = songs.sort(() => Math.random() - 0.5);
    setSongs(newFormat);
    console.log("newFormat", newFormat);
  };

  React.useEffect(() => {
    if (isPlaying) {
      linkAudio.current.play();
    } else {
      linkAudio.current.pause();
    }
  }, [isPlaying, currentSong]);

  return (
    <div className="songs">
      <audio
        src={"http://localhost:8080/audio/" + currentSong?.wavfile}
        ref={linkAudio}
      />
      <SongPlayer
        isPlaying={isPlaying}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        handleShuffle={handleShuffle}
      />
      <h3 className="songs-list__orginal-title">Latest Album</h3>
      {songs &&
        songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        ))}

      <NewCommentForm
        comment={comment}
        setComment={setComment}
        addComment={addComment}
      />
      <CommentsSection playlist={playlist} />
    </div>
  );
}

export default SongsList;
