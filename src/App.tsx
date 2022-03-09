import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import Trending from "./components/Trending/Trending";
import SearchMovie from "./components/Search/Search";
import TvSeries from "./components/TvSeries/TvSeries";
import SingleMovies from "./components/SingleMovies/SingleMovies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Trending />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TvSeries />} />
        <Route path='/movies/:id' element={<SingleMovies />} />
        <Route path='/search' element={<SearchMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
