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
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import { Search } from "@material-ui/icons";
import { LoadingSpinner } from "../../Loading/Loading";
import { fetchSearchMedia } from "../../actions/search";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [query, setQuery] = useState("");
  const { isLoading, media_list } = useTypedSelector((state) => state.search);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  if (isLoading) {
    return (
      <Container maxWidth='md'>
        <LoadingSpinner />
      </Container>
    );
  }

  const typeOfMedia = (type: number) => {
    if (type === 0) return "movie";
    else return "tv";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const media_type = typeOfMedia(type);
    dispatch(fetchSearchMedia(media_type, query));
  };

  return (
    <Container maxWidth={false} className={classes.moviesContainer}>
      <div className={classes.searchWrapper}>
        <ThemeProvider theme={darkTheme}>
          <div className={classes.searchBox}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant='outlined'
                label='Search'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                fullWidth
              />
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
        {media_list.map((media) => (
          <Grid
            key={media.id}
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            className={classes.mainCard}
          >
            <Movie movie={media} media_type={typeOfMedia(type)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchMovie;
