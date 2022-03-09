import { Container, Grid, Typography } from "@material-ui/core";
import Movie from "../Movies/Movie/Movie";
import useStyles from "./styles";

const TvSeries = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Container maxWidth={false} className={classes.moviesContainer}>
        <Typography
          align='center'
          variant='h4'
          gutterBottom
          style={{ color: "white", textTransform: "uppercase" }}
        >
          Discover Series
        </Typography>
        <Grid container justifyContent='center' spacing={4}>
          {cards.map((card) => (
            <Grid
              key={card}
              item
              xs={12}
              md={4}
              lg={3}
              sm={6}
              className={classes.mainCard}
            >
              <Movie />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TvSeries;
