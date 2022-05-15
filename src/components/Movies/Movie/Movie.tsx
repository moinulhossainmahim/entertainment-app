import {
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { MovieType } from "../../../actionTypes";
import { image } from "../../../images/image";

type movie = {
  movie: MovieType;
  media_type: string | undefined;
};

const Movie = ({ movie, media_type }: movie) => {
  const classes = useStyles();

  return (
    <div className={classes.movieDiv}>
      <Link
        to={`/${media_type}/${movie.id}`}
        className={classes.singleMovieLink}
      >
        <Badge badgeContent={movie.vote_average} color='primary' />
        <Card className={classes.card}>
          <CardMedia
            image={
              movie.poster_path === null
                ? image
                : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            }
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography
              variant='h5'
              align='center'
              gutterBottom
              className={classes.movieTitle}
            >
              {movie.title || movie.original_title || movie.original_name}
            </Typography>
            <Box className={classes.movieInfo}>
              <Typography
                variant='body1'
                paragraph
                className={classes.mediaType}
              >
                {media_type === "tv" ? "Tv Series" : media_type}
              </Typography>
              <Typography variant='body1' paragraph>
                {movie.release_date || movie.first_air_date}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Movie;
