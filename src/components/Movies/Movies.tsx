import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Movie from "./Movie/Movie";
import { LoadingSpinner } from "../../Loading/Loading";
import { useEffect } from "react";
import { fetchMovies } from "../../actions/movies";

const Movies = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isLoading, movieList } = useTypedSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (isLoading) {
    return (
      <Container maxWidth='md' className={classes.moviesContainer}>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <>
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
          {movieList.map((movie) => (
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
    </>
  );
};

export default Movies;
