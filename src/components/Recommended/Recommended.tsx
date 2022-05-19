import { Container, Grid, Typography } from "@material-ui/core";
import { LoaderKeys } from "../../reducers/loader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Movie from "../Movies/Movie/Movie";
import Loading from "../../Loading";
import useStyle from "./styles";
import { useEffect } from "react";
import { fetchRecommended } from "../../actions/recommended";
import { ReduxStore } from "../../reducers/rootReducer";

const Recommended = () => {
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const classes = useStyle();
  const loader = useSelector((state: ReduxStore) => state.loader);
  const recommendedMedias = useSelector(
    (state: ReduxStore) => state.recommended.list
  );

  useEffect(() => {
    dispatch(fetchRecommended(media_type, id));
  }, [id]);

  return loader.key === LoaderKeys.RecommendedMedia && loader.isLoading ? (
    <Container className={classes.moviesContainer}>
      <Loading />
    </Container>
  ) : (
    <Container maxWidth={false} className={classes.moviesContainer}>
      <Typography
        align='center'
        variant='h4'
        gutterBottom
        style={{ color: "#dbd9db", textTransform: "uppercase" }}
      >
        Recommended {media_type === "tv" ? "Tv Series" : "Movies"}
      </Typography>
      {recommendedMedias.length === 0 ? (
        <Typography variant='h6' align='center' className={classes.noMovieText}>
          Sorry, There is no recommended
          {media_type === "tv" ? " Tv Series" : " Movies"}
        </Typography>
      ) : (
        <Grid container justifyContent='center' spacing={4}>
          {recommendedMedias.map((media) => (
            <Grid
              key={media.id}
              item
              xs={12}
              md={4}
              lg={3}
              sm={6}
              className={classes.mainCard}
            >
              <Movie movie={media} media_type={media_type} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Recommended;
