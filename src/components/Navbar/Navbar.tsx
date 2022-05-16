import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/default-monochrome-white.svg";
import useStyles from "./styles";

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar>
          <Link to='/' className={classes.link}>
            <Logo className={classes.navIcon} />
          </Link>
        </Toolbar>
        <Link to='/search' className={classes.link}>
          <Search className={classes.searchIcon} />
        </Link>
      </AppBar>
    </>
  );
};
