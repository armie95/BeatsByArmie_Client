import "./App.scss";
import SongsList from "./Components/SongsList/SongsList";

const songs = [
  {
    id: 1,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock", "rock", "rock", "rock"],
  },
  {
    id: 2,
    name: "Max",
    duration: "19:5",
    bpm: 180,
    tags: ["jazz", "rock"],
  },
  {
    id: 3,
    name: "Max on Top",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    id: 4,
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
