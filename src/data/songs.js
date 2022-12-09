import album_image_1 from "../assets/images/BattleSongs-AlbumCover-FreesideMedia-featured.jpg";
import album_image_2 from "../assets/images/3.jpg";
import album_image_3 from "../assets/images/dynamic-radial-color-sound-equalizer-design-music-album-cover-template-abstract-circular-digital-data-form-vector-160916775.jpg";
import album_image_4 from "../assets/images/ReginaSpektorSongs.jpg";
import album_image_5 from "../assets/images/Screen-Shot-2019-12-04-at-9.35.04-PM.png";

const songs = [
  {
    id: 1,
    album_image: album_image_1,
    name: "Song here",
    duration: 3000,
    bpm: 128,
    playlistId: 1,
    tags: ["trap", "rock", "rock", "rock", "rock"],
  },
  {
    id: 2,
    album_image: album_image_2,
    name: "Song here",
    playlistId: 1,
    duration: "19:5",
    bpm: 134,
    tags: ["trap", "rock"],
  },
  {
    id: 3,
    album_image: album_image_3,
    name: "Song here",
    playlistId: 2,
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "trap"],
  },
  {
    playlistId: 2,
    id: 4,
    album_image: album_image_4,
    name: "Song here",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    id: 5,
    album_image: album_image_5,
    name: "Song here",
    duration: 3000,
    playlistId: 3,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    playlistId: 4,
    id: 4,
    album_image: album_image_4,
    name: "Song here",
    duration: 3000,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
  {
    id: 5,
    album_image: album_image_5,
    name: "Song here",
    duration: 3000,
    playlistId: 4,
    bpm: 3000,
    tags: ["rap", "rock"],
  },
];

export default songs;
