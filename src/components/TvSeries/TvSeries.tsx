import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Badge,
  Box,
} from "@material-ui/core";
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TvSeries;
