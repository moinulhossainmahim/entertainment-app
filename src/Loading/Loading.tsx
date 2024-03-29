import { CircularProgress, Box } from "@material-ui/core";

export default function Loading() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size='4rem' />
    </Box>
  );
}
