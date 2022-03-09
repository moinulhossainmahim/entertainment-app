import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  TextField,
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useStyles from "./styles";

const SearchMovie = () => {
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <Container maxWidth={false} className={classes.moviesContainer}>
      <div className={classes.searchWrapper}>
        <ThemeProvider theme={darkTheme}>
          <div className={classes.searchBox}>
            <form className={classes.form}>
              <TextField variant='outlined' label='Search' fullWidth />
              <Button variant='contained' type='submit'>
                <Search fontSize='large' />
              </Button>
            </form>
          </div>
          <Tabs
            value={type}
            indicatorColor='primary'
            textColor='primary'
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label='disabled tabs example'
          >
            <Tab style={{ width: "50%" }} label='Search Movies' />
            <Tab style={{ width: "50%" }} label='Search TV Series' />
          </Tabs>
        </ThemeProvider>
      </div>
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
  );
};

export default SearchMovie;
