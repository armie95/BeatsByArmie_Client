import "./index.css";
import playlist from "../../data/playlist";
import { useNavigate } from "react-router-dom";

// const API_URL = "http://localhost:8080/";
// const SongsEndPoint = "songs/";

// //const Home = () => {
//   const [songsList, SetSongsList] = useState([]);

//   async function fetchVideosList() {
//     try {
//       const response = await axios.get(API_URL + SongsEndPoint);
//       const data = response.data;
//       //store your data into the songslist
//       SetSongsList(data);

//       ///grab the input index within your songslist and store it into the variaable
//       const firstSongID = data[0].id;
//     } catch (err) {
//       console.log(`There was an error ${err.message}`);
//     }
//   }
// };

function PlayList() {
  const navigate = useNavigate();

  return (
    <div className="playlist-container">
      {playlist.map((play) => {
        return (
          <div
            className="playlist-box"
            onClick={() => navigate("/playlist:" + play.id)}
          >
            <img src={play.album_image} alt="" className="playlist-img" />
            <p className="playlist-name">{play.name}</p>
            <p className="playlist-description">{play.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PlayList;
