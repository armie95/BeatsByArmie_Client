import "./App.scss";
import SongsList from "./Components/SongsList/SongsList";
import album_image_1 from "./assets/images/BattleSongs-AlbumCover-FreesideMedia-featured.jpg";
import album_image_2 from "./assets/images/3.jpg";
import album_image_3 from "./assets/images/dynamic-radial-color-sound-equalizer-design-music-album-cover-template-abstract-circular-digital-data-form-vector-160916775.jpg";
import album_image_4 from "./assets/images/ReginaSpektorSongs.jpg";
import album_image_5 from "./assets/images/Screen-Shot-2019-12-04-at-9.35.04-PM.png";

const songs = [
  {
    id: 1,
    album_image: album_image_1,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock", "rock", "rock", "rock"],
  },
  {
    id: 2,
    album_image: album_image_2,
    name: "Max",
    duration: "19:5",
    bpm: 180,
    tags: ["jazz", "rock"],
  },
  {
    id: 3,
    album_image: album_image_3,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    id: 4,
    album_image: album_image_4,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    id: 5,
    album_image: album_image_5,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    id: 5,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
];

function App() {
  return (
    <div className="App" id="app">
      <SongsList songs={songs} />
      {/* <Song /> */}
    </div>
  );
}

export default App;
