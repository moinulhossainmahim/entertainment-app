import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Tv, Whatshot, Movie, Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const classes = useStyles();

  React.useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/tvseries");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <BottomNavigation
      className={classes.footer}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label='Trending'
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label='Movies'
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label='Tv Series'
        icon={<Tv />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label='Search'
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
