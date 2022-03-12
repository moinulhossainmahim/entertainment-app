import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  movieContainer: {
    padding: "2rem",
    minHeight: "100%",
  },
  movieImage: {
    maxWidth: "100%",
  },
  movieDetails: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  btn: {
    textDecoration: "none",
  },
}));
