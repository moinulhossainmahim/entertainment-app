import { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import { LoadingSpinner } from "../../Loading/Loading";
import { fetchSingleMedia } from "../../actions/movies";

enum LoaderKeys {
  singleMedia = "singleMedia",
}

const SingleMovies = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const {
    loader: { isLoading, key },
    singleMedia: { media },
  } = useTypedSelector((state) => state);

  useEffect(() => {
    if (!media) {
      dispatch(fetchSingleMedia(media_type, id));
    }
  }, []);

  return key === LoaderKeys.singleMedia && isLoading ? (
    <Container maxWidth='md' className={classes.movieContainer}>
      <LoadingSpinner />
    </Container>
  ) : (
    <Container maxWidth='md' className={classes.movieContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${media?.poster_path}`}
            alt='Imgae'
            className={classes.movieImage}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.movieDetails}>
          <Typography variant='h3' gutterBottom>
            {media?.title || media?.original_name || media?.original_title}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {media?.tagline}
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            overview: {media?.overview}
          </Typography>
          <Button variant='contained' color='secondary'>
            Watch The trailers
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleMovies;
