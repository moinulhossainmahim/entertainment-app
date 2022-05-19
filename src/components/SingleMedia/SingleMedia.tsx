import { useEffect } from "react";
import { Container, Grid, Typography, Chip, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Loading from "../../Loading";
import { fetchSingleMedia } from "../../actions/media";
import { image } from "../../images/image";
import { LoaderKeys } from "../../reducers/loader";
import TrailerModal from "../TrailerModal/TrailerModal";

const SingleMovie = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const loader = useTypedSelector((state) => state.loader);
  const media = useTypedSelector((state) => state.singleMedia.media);
  const casts = useTypedSelector((state) => state.casts.casts);

  useEffect(() => {
    dispatch(fetchSingleMedia(media_type, id));
    // dispatch(fetchCasts(media_type, id));
  }, [media_type, id]);

  return loader.key === LoaderKeys.SingleMedia && loader.isLoading ? (
    <Container className={classes.movieContainer}>
      <Loading />
    </Container>
  ) : (
    <Container className={classes.movieContainer} maxWidth={false}>
      <Grid container>
        <Grid item sm={12} md={6} className={classes.poster}>
          <img
            src={
              media?.poster_path === null || undefined
                ? image
                : `https://image.tmdb.org/t/p/w400/${media?.poster_path}`
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
                <Link
                  to={`/genres/${media_type}/${genre.name}/${genre.id}`}
                  key={genre.id}
                  style={{ textDecoration: "none" }}
                >
                  <Chip label={genre.name} className={classes.chip} />
                </Link>
              );
            })}
          </div>
          <Typography variant='h6' className={classes.heading}>
            The synopsis
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            {media?.overview}
          </Typography>
          {/* <CastSlider casts={casts} /> */}
          <div className={classes.actionButton}>
            {media?.homepage && (
              <Button
                variant='contained'
                color='secondary'
                target='_blank'
                href={media.homepage}
              >
                Website
              </Button>
            )}
            <Button
              variant='contained'
              color='secondary'
              target='_blank'
              href={`https://www.imdb.com/title/${media?.imdb_id}`}
            >
              Imdb
            </Button>
            {media?.videos.results.length !== 0 && (
              <TrailerModal videos={media?.videos} />
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleMovie;
