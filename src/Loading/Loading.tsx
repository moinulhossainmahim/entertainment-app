import { CircularProgress, Box } from "@material-ui/core";

export const LoadingSpinner = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
