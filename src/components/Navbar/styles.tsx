import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    width: "100%",
    height: "6rem",
    backgroundColor: "#39445A",
    color: "white",
    justifyContent: "space-around",
    textTransform: "uppercase",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0px 2px 4px #292323",
  },
  header: {
    fontSize: "2rem",
  },
  navIcon: {
    fontSize: "3rem",
    cursor: "pointer",
  },
}));
