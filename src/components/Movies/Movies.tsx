import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Movie from "./Movie/Movie";
import { LoadingSpinner } from "../../Loading/Loading";
import { useEffect } from "react";
import { fetchMovies } from "../../actions/movies";

enum LoaderKeys {
  movies = "movies",
}

const Movies = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    loader: { isLoading, key },
    movies: { list },
  } = useTypedSelector((state) => state);

  useEffect(() => {
    if (!list.length) {
      dispatch(fetchMovies());
    }
  }, []);

  return key === LoaderKeys.movies && isLoading ? (
    <Container maxWidth='md'>
      <LoadingSpinner />
    </Container>
  ) : (
    <Container maxWidth={false} className={classes.moviesContainer}>
      <Typography
        align='center'
        variant='h4'
        gutterBottom
        style={{ color: "white", textTransform: "uppercase" }}
      >
        Discover Movies
      </Typography>
      <Grid container justifyContent='center' spacing={4}>
        {list.map((movie) => (
          <Grid
            key={movie.id}
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            className={classes.mainCard}
          >
            <Movie movie={movie} media_type='movie' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
