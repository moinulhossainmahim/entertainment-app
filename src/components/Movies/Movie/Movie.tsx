import {
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import { MovieType } from "../../../actionTypes";

type movie = {
  movie: MovieType;
};

const Movie = ({ movie }: movie) => {
  const classes = useStyles();
  return (
    <>
      <Badge badgeContent={movie.vote_average} color='primary' />
      <Card className={classes.card}>
        <CardMedia
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography
            variant='h5'
            align='center'
            gutterBottom
            className={classes.movieTitle}
          >
            {movie.title}
          </Typography>
          <Box className={classes.movieInfo}>
            <Typography variant='body1' paragraph className={classes.mediaType}>
              {movie.media_type}
            </Typography>
            <Typography variant='body1' paragraph>
              {movie.release_date}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Movie;
