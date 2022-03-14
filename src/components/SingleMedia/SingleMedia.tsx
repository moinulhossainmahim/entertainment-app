import { useEffect } from "react";
import { Button, Container, Grid, Typography, Chip } from "@material-ui/core";
import { AddCircleOutlined } from "@material-ui/icons";
import { useParams, Link } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Loading from "../../Loading";
import { fetchSingleMedia } from "../../actions/media";
import { image } from "../../images/image";
import { LoaderKeys } from "../../reducers/loader";

const SingleMovie = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const loader = useTypedSelector((state) => state.loader);
  const media = useTypedSelector((state) => state.singleMedia.media);

  useEffect(() => {
    dispatch(fetchSingleMedia(media_type, id));
  }, [id]);

  const handleClick = () => {};

  return loader.key === LoaderKeys.SingleMedia && loader.isLoading ? (
    <Container maxWidth='md' className={classes.movieContainer}>
      <Loading />
    </Container>
  ) : (
    <Container className={classes.movieContainer} maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
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
                  icon={<AddCircleOutlined />}
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleMovie;
