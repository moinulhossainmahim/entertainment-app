import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  searchBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "15px 0",
    alignItems: "center",
    position: "relative",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: "#282c34",
    color: "white",
    transition: "all 0.2s linear",
  },
  cardMedia: {
    height: "25rem",
  },
  mainCard: {
    position: "relative",
  },
  moviesContainer: {
    backgroundColor: "#39445A",
    padding: "7% 5%",
    minHeight: "calc(100vh - 11rem)",
  },
  movieInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    width: "60vw",
    display: "flex",
  },
  searchWrapper: {
    padding: "0 0 5rem 0",
  },
  warningMsg: {
    color: "#c62121",
    position: "absolute",
    top: "-112%",
    left: "17%",
    fontSize: "1.2rem",
  },
}));
