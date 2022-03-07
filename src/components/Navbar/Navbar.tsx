import { AppBar, Typography } from "@material-ui/core";
import { Theaters } from "@material-ui/icons";
import useStyles from "./styles";

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='sticky' className={classes.appBar}>
        <span>
          <Theaters className={classes.navIcon} />
        </span>
        <Typography variant='h6' className={classes.header}>
          Entertainment Hub
        </Typography>
      </AppBar>
    </>
  );
};
