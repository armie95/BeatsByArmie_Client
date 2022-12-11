import "./index.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlayList() {
  const navigate = useNavigate();

  const [playlist, setPlayList] = React.useState([]);

  React.useEffect(() => {
    axios({
      url: "http://localhost:8080/fullPlaylist",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => setPlayList(response.data))
      .catch((error) => alert(error, "somethign went wrong!"));
  }, []);

  return (
    <div className="playlist-container">
      {playlist?.map((play) => (
        <div
          key={play.id}
          className="playlist-box"
          onClick={() => navigate("/playlist:" + play.id)}
        >
          <img
            alt="thumbnail"
            className="playlist-img"
            src={"http://localhost:8080/images/" + play.album_image}
          />
          <p className="playlist-name">{play.name}</p>
          <p className="playlist-description">{play.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayList;
