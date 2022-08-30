import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  message?: string;
  disableShrink?: boolean;
}

export default function LoadingComponent({
  message = "Loading...",
  disableShrink = false,
}: Props) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress
          size={70}
          color="inherit"
          disableShrink={disableShrink}
        />
        <Typography
          variant="h6"
          sx={{ justifyContent: "center", position: "fixed", top: "60%" }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
