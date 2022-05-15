import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    color: "white",
    width: "100%",
    height: "6rem",
    backgroundColor: "#39445A",
    justifyContent: "space-around",
    textTransform: "uppercase",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0px 2px 4px #292323",
  },
  navIcon: {
    height: "10rem",
    color: "white",
    width: "10rem",
    objectFit: "contain",
    cursor: "pointer",
  },
  searchIcon: {
    fontSize: "3rem",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
