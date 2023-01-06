import React from "react";
import axios from "axios";
import "./OtherPlayLists.scss";
import { useNavigate, useParams } from "react-router-dom";

function PlayList() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [playlist, setPlayList] = React.useState([]);

  React.useEffect(() => {
    axios({
      url: "https://beatsbyarmie.herokuapp.com/fullPlaylist",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(({ data }) => {
        let filterArray = data.filter((item) => item.id !== +id.substring(1));
        setPlayList(filterArray);
      })
      .catch((error) => console.log(error, "somethign went wrong!"));
  }, []);

  return (
    <div className="playlist2">
      {playlist?.map((play) => (
        <div
          key={play.id}
          className="playlist2__box-other"
          onClick={() => navigate("/playlist:" + play.id)}
        >
          <img
            alt="thumbnail"
            className="playlist2__img"
            src={
              "https://beatsbyarmie.herokuapp.com/assets/images/" +
              play?.album_image
            }
          />
          <p className="playlist2__name">{play.name}</p>
          <p className="playlist2__description">{play?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayList;
