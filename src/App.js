import "./App.scss";
import PlayList from "./Components/PlayList";
import SongsList from "./Components/SongsList/SongsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PlayList />} />
        <Route path="/playlist:id" element={<SongsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
