import { useEffect } from "react";
import { Container, Grid, Typography, Chip } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Loading from "../../Loading";
import { fetchSingleMedia } from "../../actions/media";
import { fetchCasts } from "../../actions/casts";
import { image } from "../../images/image";
import { LoaderKeys } from "../../reducers/loader";
import CastSlider from "../cast-slider/CastSlider";

const SingleMovie = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const loader = useTypedSelector((state) => state.loader);
  const media = useTypedSelector((state) => state.singleMedia.media);
  const casts = useTypedSelector((state) => state.casts.casts);

  useEffect(() => {
    dispatch(fetchSingleMedia(media_type, id));
    dispatch(fetchCasts(media_type, id));
  }, [media_type, id]);

  const handleClick = () => {};

  return loader.key === LoaderKeys.SingleMedia && loader.isLoading ? (
    <Container maxWidth='md' className={classes.movieContainer}>
      <Loading />
    </Container>
  ) : (
    <Container className={classes.movieContainer} maxWidth={false}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={6}>
          <img
            src={
              media?.poster_path === null || undefined
                ? image
                : `https://image.tmdb.org/t/p/w500/${media?.poster_path}`
            }
            alt='Imgae'
            className={classes.movieImage}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography variant='h3'>
            {media?.title || media?.original_name || media?.original_title}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {media?.tagline}
          </Typography>
          <Typography variant='h6' className={classes.heading}>
            The Genres
          </Typography>
          <div className={classes.genre}>
            {media?.genres.map((genre) => {
              return (
                <Chip
                  label={genre.name}
                  onClick={handleClick}
                  key={genre.id}
                  className={classes.chip}
                />
              );
            })}
          </div>
          <Typography variant='h6' className={classes.heading} gutterBottom>
            The synopsis
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            {media?.overview}
          </Typography>
          <Typography variant='h6' className={classes.heading} gutterBottom>
            The cast
          </Typography>
          <CastSlider casts={casts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleMovie;
