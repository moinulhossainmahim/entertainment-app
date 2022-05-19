import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import { LoaderKeys } from "../../reducers/loader";
import { fetchMedia } from "../../actions/media";
import { ReduxStore } from "../../reducers/rootReducer";

const TvSeries = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loader = useSelector((state: ReduxStore) => state.loader);
  const tvSeries = useSelector((state: ReduxStore) => state.tvSeries.list);

  useEffect(() => {
    if (!tvSeries.length) {
      dispatch(fetchMedia("tv"));
    }
  }, []);

  return loader.key === LoaderKeys.TvSeries && loader.isLoading ? (
    <Container className={classes.moviesContainer}>
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
        Discover Series
      </Typography>
      <Grid container justifyContent='center' spacing={4}>
        {tvSeries.map((media) => (
          <Grid
            key={media.id}
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            className={classes.mainCard}
          >
            <Movie movie={media} media_type='tv' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TvSeries;
