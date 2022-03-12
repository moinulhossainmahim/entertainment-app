import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../utilities/useTypeSelector";
import useStyles from "./styles";
import Movie from "../Movies/Movie/Movie";
import { LoadingSpinner } from "../../Loading/Loading";
import { fetchTrending } from "../../actions/movies";

const Trending = () => {
  const dispatch = useDispatch();
  const { isLoading, list } = useTypedSelector((state) => state.trending);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchTrending());
  }, []);

  if (isLoading) {
    return (
      <Container maxWidth='md' className={classes.moviesContainer}>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <>
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
          {list.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              md={4}
              lg={3}
              sm={6}
              className={classes.mainCard}
            >
              <Movie movie={item} media_type={item.media_type} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Trending;
