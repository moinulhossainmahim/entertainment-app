import { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Loading from "../../Loading";
import { fetchSingleMedia } from "../../actions/movies";
import { image } from "../../images/image";
import { LoaderKeys } from "../../reducers/loader";

const SingleMovie = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const loader = useTypedSelector((state) => state.loader);
  const media = useTypedSelector((state) => state.singleMedia.media);

  const mediaType = (type: string | undefined) => {
    if (type === "movie") {
      return "movies";
    } else if (type === "tv") {
      return "tvseries";
    } else if (type === "trending") {
      return "trending";
    }
  };

  useEffect(() => {
    dispatch(fetchSingleMedia(media_type, id));
  }, []);

  return loader.key === LoaderKeys.SingleMedia && loader.isLoading ? (
    <Container maxWidth='md' className={classes.movieContainer}>
      <Loading />
    </Container>
  ) : (
    <Container maxWidth='md' className={classes.movieContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src={
              media?.poster_path === null
                ? image
                : `https://image.tmdb.org/t/p/w500/${media?.poster_path}`
            }
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
          <Link to={`/${mediaType(media_type)}`} className={classes.btn}>
            <Button variant='contained' color='secondary'>
              back to {media_type}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleMovie;
