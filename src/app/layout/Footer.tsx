import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid, Icon, IconButton, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';

// import Heart from '../../static/heart.svg';

function Copyright() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 1, md: 1 }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
        {
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            {'Go Germany '}
          </Link>
        }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {'Made with ❤️ by Yan-Ying Liao'}
      </Typography>
    </Stack>
  );
}

export default function Footer() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
      }}
      component="footer"
    >
      <Grid item>
        <Box>
          <Link
            target="_blank"
            href={'https://github.com/noworneverev'}
            underline="none"
            color="inherit"
          >
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            target="_blank"
            href={'https://www.linkedin.com/in/yan-ying-liao/'}
            underline="none"
            color="inherit"
          >
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link
            target="_blank"
            href={'mailto:n9102125@gmail.com'}
            underline="none"
            color="inherit"
          >
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
          </Link>
        </Box>
      </Grid>
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
}
