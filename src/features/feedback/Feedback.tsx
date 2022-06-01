import { Box, Grid } from '@mui/material';
import React from 'react';

export default function Feedback() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc8JEF-JuiPSSNvQFSTR8u-PeoOBjh4j5nSQAif7rENNbcOpg/viewform?embedded=true"
          width={640}
          height={1150}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          載入中…
        </iframe>
      </Grid>
    </Grid>
  );
}
