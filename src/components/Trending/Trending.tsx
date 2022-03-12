import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import Loading from "../../Loading";
import { fetchTrending } from "../../actions/movies";
import { LoaderKeys } from "../../reducers/loader";

const Trending = () => {
  const dispatch = useDispatch();
  const trendingMovies = useTypedSelector((state) => state.trending.list);
  const loader = useTypedSelector((state) => state.loader);
  const classes = useStyles();

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
