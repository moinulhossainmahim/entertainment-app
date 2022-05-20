import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import Loading from "../../Loading";
import { fetchMediaByGenres } from "../../actions/media";
import { LoaderKeys } from "../../reducers/loader";
import { useParams } from "react-router-dom";
import { ReduxStore } from "../../reducers/rootReducer";

const Genres = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [sort, setSort] = useState("");
  const { media_type, genreId, name } = useParams();
  const loader = useSelector((state: ReduxStore) => state.loader);
  const genreMedias = useSelector(
    (state: ReduxStore) => state.genreMedias.list
  );

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchMediaByGenres(media_type, genreId, sort));
  }, [sort]);

  return loader.key === LoaderKeys.GenreMedias && loader.isLoading ? (
    <Container maxWidth='md' className={classes.moviesContainer}>
      <Typography
        align='center'
        variant='h4'
        gutterBottom
        style={{ color: "white", textTransform: "uppercase" }}
      >
        {name?.toUpperCase()} {media_type === "tv" ? "Tv Series" : "Movies"}
      </Typography>
      <FormControl className={classes.selectForm}>
        <InputLabel
          id='demo-simple-select-label'
          style={{ color: "white", top: "-20%" }}
        >
          Sort By
        </InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={sort}
          label='Sort By'
          onChange={handleChange}
          autoWidth={true}
          style={{ color: "white", border: "1px solid white" }}
        >
          <MenuItem value='popularity.desc'>Popularity</MenuItem>
          <MenuItem value='vote_average.desc'>Votes Average</MenuItem>
          <MenuItem value='original_title.asc'>Title</MenuItem>
          <MenuItem value='release_date.desc'>Release Date</MenuItem>
        </Select>
      </FormControl>
      <Loading />
    </Container>
  ) : (
    <Container maxWidth={false} className={classes.moviesContainer}>
      <Typography
        align='center'
        variant='h4'
        gutterBottom
        style={{ color: "white", textTransform: "uppercase" }}
      >
        {name?.toUpperCase()} {media_type === "tv" ? "Tv Series" : "Movies"}
      </Typography>
      <FormControl className={classes.selectForm}>
        <InputLabel
          id='demo-simple-select-label'
          style={{ color: "white", top: "-20%" }}
        >
          Sort By
        </InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={sort}
          label='Sort By'
          onChange={handleChange}
          autoWidth={true}
          style={{ color: "white", border: "1px solid white" }}
        >
          <MenuItem value='popularity.desc'>Popularity</MenuItem>
          <MenuItem value='vote_average.desc'>Votes Average</MenuItem>
          <MenuItem value='original_title.asc'>Title</MenuItem>
          <MenuItem value='release_date.desc'>Release Date</MenuItem>
        </Select>
      </FormControl>
      <Grid container justifyContent='center' spacing={4}>
        {genreMedias.map((movie) => (
          <Grid
            key={movie.id}
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            className={classes.mainCard}
          >
            <Movie movie={movie} media_type={media_type} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Genres;
