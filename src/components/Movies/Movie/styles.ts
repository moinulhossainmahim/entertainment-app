import { capitalize, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: "#282c34",
    color: theme.palette.primary.main,
    transition: "all 0.2s linear",
  },
  cardMedia: {
    height: "25rem",
  },
  movieInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  movieTitle: {
    textTransform: "capitalize",
  },
  mediaType: {
    textTransform: "capitalize",
  },
  singleMovieLink: {
    textDecoration: "none",
  },
  movieDiv: {
    transform: "scale(1)",
    transition: ".2s linear transform",
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
}));
