import { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import { LoadingSpinner } from "../../Loading/Loading";
import { fetchSingleMovie } from "../../actions/movies";

const SingleMovies = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const { isLoading, singleMovie } = useTypedSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchSingleMovie(media_type, id));
  }, [media_type, id]);

  if (isLoading) {
    return (
      <Container maxWidth='md' className={classes.movieContainer}>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth='md' className={classes.movieContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${singleMovie?.poster_path}`}
              alt='Imgae'
              className={classes.movieImage}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.movieDetails}>
            <Typography variant='h3' gutterBottom>
              {singleMovie?.title ||
                singleMovie?.original_name ||
                singleMovie?.original_title}
            </Typography>
            <Typography variant='h6' gutterBottom>
              {singleMovie?.tagline}
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              overview: {singleMovie?.overview}
            </Typography>
            <Button variant='contained' color='secondary'>
              Watch The trailers
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleMovies;
