import "./Playlist.scss";
import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function PlayList() {
  const navigate = useNavigate();

  const [playlist, setPlayList] = React.useState([]);

  React.useEffect(() => {
    axios({
      url: "https://beatsbyarmie.herokuapp.com/fullPlaylist",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => setPlayList(response.data))
      .catch((error) => console.log(error, "somethign went wrong!"));
  }, []);

  return (
    <div className="playlist">
      <video autoPlay loop muted className="playlist__videobg">
        <source src={require("../../assets/video1.mp4")} type="video/mp4" />
      </video>
      <h1 className="playlist__Title">Discover Sound</h1>

      <div className="playlist__heading">FEATURED PLAYLIST</div>

      <div className="playlist__container">
        {playlist?.map((play) => (
          <div
            key={play.id}
            className="playlist__box"
            onClick={() => navigate("/playlist:" + play.id)}
          >
            <img
              alt="thumbnail"
              className="playlist__img"
              src={
                "https://beatsbyarmie.herokuapp.com/images/" + play?.album_image
              }
            />
            <p className="playlist__name">{play.name}</p>
            <p className="playlist__description">{play?.description}</p>
          </div>
        ))}
      </div>

      <div className="playlist__infobox">
        <div className="playlist__infoContent">
          <div>
            <h1 className="playlist__infoH1">Join us</h1>
            <h4 className="playlist__infoH4">
              Be the first to know about product news and community activities.
            </h4>
          </div>
          <div>
            <input className="playlist__input" />
            Need an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
