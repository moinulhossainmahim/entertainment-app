import { Typography, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Error = () => {
  const classes = useStyles();
  return (
    <Box className={classes.errorPage}>
      <Typography variant='h1' align='center' gutterBottom>
        404
      </Typography>
      <Typography variant='h3' gutterBottom>
        Sorry, the page you tried cannot be found
      </Typography>
      <Link to='/' className={classes.btn}>
        <Button variant='contained' color='secondary'>
          back home
        </Button>
      </Link>
    </Box>
  );
};

export default Error;
