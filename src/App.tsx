import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import {
  SinglePage,
  MoviesPage,
  ErrorPage,
  Home,
  TvSeriesPage,
  SearchPage,
  GenresPage,
} from "./components/Pages";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dbd9db",
    },
    secondary: {
      main: "#243453",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/:media_type/:id' element={<SinglePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route
            path='/genres/:media_type/:name/:genreId'
            element={<GenresPage />}
          />
          <Route path='/tvseries' element={<TvSeriesPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
