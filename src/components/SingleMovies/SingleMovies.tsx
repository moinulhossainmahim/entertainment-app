import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const SingleMovies = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth='md' className={classes.movieContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src='https://source.unsplash.com/random'
              alt='Imgae'
              className={classes.movieImage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h1' gutterBottom>
              Batman
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              The Dark Knight of Gotham City begins his war on crime with his
              first major enemy being Jack Napier, a criminal who becomes the
              clownishly homicidal Joker.
            </Typography>
            <Typography variant='h6' gutterBottom>
              1989
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
