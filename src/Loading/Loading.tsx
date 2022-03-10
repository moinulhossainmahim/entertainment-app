import * as React from "react";
import { CircularProgress, Box } from "@material-ui/core";

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
