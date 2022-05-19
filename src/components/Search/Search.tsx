import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "@material-ui/icons";
import Loading from "../../Loading";
import { fetchSearchMedia } from "../../actions/search";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import { ReduxStore } from "../../reducers/rootReducer";
import { LoaderKeys } from "../../reducers/loader";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [query, setQuery] = useState("");
  const [showError, setShowError] = useState(false);
  const loader = useSelector((state: ReduxStore) => state.loader);
  const media_list = useSelector(
    (state: ReduxStore) => state.search.media_list
  );

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const typeOfMedia = (type: number) => {
    if (type === 0) return "movie";
    else return "tv";
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) {
      return setShowError(true);
    }
    const media_type = typeOfMedia(type);
    dispatch(fetchSearchMedia(media_type, query));
    setShowError(false);
  };

  return loader.key === LoaderKeys.Search && loader.isLoading ? (
    <Container className={classes.moviesContainer}>
      <Loading />
    </Container>
  ) : (
    <Container maxWidth={false} className={classes.moviesContainer}>
      <div className={classes.searchWrapper}>
        <ThemeProvider theme={darkTheme}>
          <div className={classes.searchBox}>
            {showError && (
              <h4 className={classes.warningMsg}>please fill in this field*</h4>
            )}
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
