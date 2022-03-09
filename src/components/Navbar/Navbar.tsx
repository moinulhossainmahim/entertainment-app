import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { Theaters } from "@material-ui/icons";
import useStyles from "./styles";

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar>
          <Theaters className={classes.navIcon} />
        </Toolbar>
        <Typography variant='h4'>Entertainment Hub</Typography>
      </AppBar>
    </>
  );
};
