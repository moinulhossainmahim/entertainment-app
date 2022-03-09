import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import {
  Home,
  SearchPage,
  TvSeriesPage,
  SinglePage,
  MoviesPage,
} from "./components/Pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/tvseries' element={<TvSeriesPage />} />
        <Route path='/movies/:id' element={<SinglePage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
