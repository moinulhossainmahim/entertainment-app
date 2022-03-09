import {
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";

const Movie = () => {
  const classes = useStyles();
  return (
    <>
      <Badge badgeContent={1} color='primary' />
      <Card className={classes.card}>
        <CardMedia
          image='https://source.unsplash.com/random'
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography variant='h5' align='center' gutterBottom>
            The Batman
          </Typography>
          <Box className={classes.movieInfo}>
            <Typography variant='body1' paragraph>
              Movie
            </Typography>
            <Typography variant='body1' paragraph>
              2021-12-15
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Movie;
