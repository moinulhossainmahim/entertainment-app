import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import Loading from "../../Loading";
import { fetchTrending } from "../../actions/media";
import { LoaderKeys } from "../../reducers/loader";
import { ReduxStore } from "../../reducers/rootReducer";

const Trending = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loader = useSelector((state: ReduxStore) => state.loader);
  const trendingMovies = useSelector(
    (state: ReduxStore) => state.trending.list
  );

  useEffect(() => {
    if (!trendingMovies.length) {
      dispatch(fetchTrending());
    }
  }, []);
  return loader.key === LoaderKeys.Trending && loader.isLoading ? (
    <Container maxWidth='md' className={classes.moviesContainer}>
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
        Trending Today
      </Typography>
      <Grid container justifyContent='center' spacing={4}>
        {trendingMovies.map((movie) => (
          <Grid
            key={movie.id}
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            className={classes.mainCard}
          >
            <Movie movie={movie} media_type={movie.media_type} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Trending;
