import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  movieContainer: {
    padding: "5% 10%",
    backgroundColor: "#39445A",
    color: "#c6c6c6",
    minHeight: "100vh",
  },
  movieImage: {
    maxWidth: "100%",
  },
  btn: {
    textDecoration: "none",
  },
  heading: {
    textTransform: "uppercase",
  },
  genre: {
    display: "flex",
    padding: "1rem 0",
    flexWrap: "wrap",
  },
  chip: {
    marginRight: ".5rem",
    cursor: "pointer",
    marginTop: "1rem",
  },
  actionButton: {
    display: "flex",
    paddingTop: "4rem",
    gap: "2rem",
    flexWrap: "wrap",
  },
  poster: {
    display: "flex",
    justifyContent: "center",
  },
}));
