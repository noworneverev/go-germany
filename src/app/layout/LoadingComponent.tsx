import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = 'Loading...' }: Props) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size={70} color="inherit" />
        <Typography
          variant="h6"
          sx={{ justifyContent: 'center', position: 'fixed', top: '60%' }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
