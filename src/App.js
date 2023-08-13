import "./App.css";
import { Route, Routes } from "react-router";
import { MovieListing } from "./pages/listing/MovieListing";
import { MovieDetail } from "./pages/moviedetail/MovieDetail";
import { WatchList } from "./pages/watchlist/WatchList";
import { Header } from "./components/Header";
import { StarredMovie } from "./pages/starmovie/StarredMovie";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/moviedetail/:movieId" element={<MovieDetail />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/starmovie" element={<StarredMovie />} />
      </Routes>
    </div>
  );
}

export default App;
