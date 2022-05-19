import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import Movie from "./Movie/Movie";
import Loading from "../../Loading";
import { useEffect } from "react";
import { fetchMedia } from "../../actions/media";
import { LoaderKeys } from "../../reducers/loader";
import { ReduxStore } from "../../reducers/rootReducer";

const Movies = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loader = useSelector((state: ReduxStore) => state.loader);
  const movies = useSelector((state: ReduxStore) => state.movies.list);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchMedia("movie"));
    }
  }, []);

  return loader.key === LoaderKeys.Movies && loader.isLoading ? (
    <Container className={classes.moviesContainer}>
      <Loading />
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
        {movies.map((movie) => (
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
