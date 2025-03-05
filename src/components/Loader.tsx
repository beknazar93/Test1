import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="120px">
      <CircularProgress color="primary" />
    </Box>
  );
}
