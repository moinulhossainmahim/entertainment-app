import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import { LoadingSpinner } from "../../Loading/Loading";
import { fetchTvSeries } from "../../actions/movies";

enum LoaderKeys {
  tvseries = "tvseries",
}

const TvSeries = () => {
  const dispatch = useDispatch();
  const {
    loader: { isLoading, key },
    tvSeries: { list },
  } = useTypedSelector((state) => state);
  const classes = useStyles();

  useEffect(() => {
    if (!list.length) {
      dispatch(fetchTvSeries());
    }
  }, []);

  return key === LoaderKeys.tvseries && isLoading ? (
    <Container maxWidth='md' className={classes.moviesContainer}>
      <LoadingSpinner />
    </Container>
  ) : (
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
        {list.map((movie) => (
          <Grid
            key={movie.id}
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            className={classes.mainCard}
          >
            <Movie movie={movie} media_type='tv' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TvSeries;
