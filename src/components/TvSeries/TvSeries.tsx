import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import Loading from "../../Loading";
import { fetchMedia } from "../../actions/media";

enum LoaderKeys {
  tvseries = "tvseries",
}

const TvSeries = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loader = useTypedSelector((state) => state.loader);
  const tvSeries = useTypedSelector((state) => state.tvSeries.list);

  useEffect(() => {
    if (!tvSeries.length) {
      dispatch(fetchMedia("tv"));
    }
  }, []);

  return loader.key === LoaderKeys.tvseries && loader.isLoading ? (
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
