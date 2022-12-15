import "./App.scss";
import Navbar from "./Components/NavBar/Navbar";
import PlayList from "./Components/PlayList/Playlist";
import SongsList from "./Components/SongsList/SongsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PlayList />} />
        <Route path="/playlist:id" element={<SongsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
