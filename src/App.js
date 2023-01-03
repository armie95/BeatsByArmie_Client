import "./App.scss";
import Navbar from "./Components/NavBar/Navbar";
import PlayList from "./Components/PlayList/Playlist";
import SongsList from "./Components/SongsList/SongsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "../src/Components/Login/Login";
import Signup from "../src/Components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PlayList />} />
        <Route path="/playlist:id" element={<SongsList />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
