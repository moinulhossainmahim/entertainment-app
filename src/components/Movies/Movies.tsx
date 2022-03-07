import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Badge,
} from "@material-ui/core";
import useStyles from "./styles";

const Movies = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Container maxWidth={false} className={classes.moviesContainer}>
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
                  <Typography variant='h5'>Heading</Typography>
                  <Typography>This looks awesome!</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Movies;
