import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import School from '../../static/undraw_back_to_school_inwc.svg';
import Dog from '../../static/dog.svg';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';
import { ReactComponent as SvgDog } from '../../static/dog.svg';

export default function HomePage() {
  const { t } = useTranslation();
  // const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${t('home_header')} | Go Germany`;
  }, [t]);

  return (
    // <Container component={Paper} sx={{ mt: -4 }}>

    <Grid
      container
      component={Paper}
      marginLeft={{ xs: -2, lg: -5.1, sm: -3 }}
      sx={{
        mt: -4,
        width: '100vw',
        minHeight: '100vh',
        borderRadius: 0,
      }}
      // alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Grid container direction="row-reverse">
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ mt: 4 }}
            display="flex"
            justifyContent="center"
          >
            <SvgIcon
              component={SvgDog}
              viewBox="0 0 250 150"
              sx={{ fontSize: 250 }}
              // inheritViewBox
              // sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />

            {/* <img src={Dog} style={{ height: 'auto', maxWidth: '100%' }} /> */}
          </Grid>

          <Grid item lg={8} sx={{ p: 5 }}>
            <Typography variant="h4">{t('home_message')}</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ px: 5 }}
            justifyContent={{ xs: 'center', lg: 'left' }}
            display="flex"
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/programme"
                sx={{ textTransform: 'none' }}
              >
                {t('home_button_programme')}
              </Button>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/article"
                color="success"
                sx={{ textTransform: 'none' }}
              >
                {t('home_button_article')}
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ p: 5 }} />
          <Grid
            item
            xs={12}
            lg={12}
            justifyContent="center"
            display="flex"
            sx={{ mb: 3 }}
          >
            <img src={School} style={{ height: 'auto', maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Grid>

    // <Grid
    //   container
    //   component={Paper}
    //   marginLeft={{ xs: -4.1, lg: -5.1 }}
    //   sx={{
    //     mt: -4,
    //     width: '100vw',
    //     minHeight: '100vh',
    //   }}
    // >
    //   <Grid item lg={6} xs={12}>
    //     <Grid
    //       container
    //       // direction="column"
    //       // alignItems="center"
    //       justifyContent="center"
    //       sx={{ p: 10 }}
    //     >
    //       <Typography variant="h4">
    //         Search target school quickly, focus on your application
    //       </Typography>
    //     </Grid>
    //     {/* <Box justifyContent="center" display="flex"> */}

    //     {/* </Box> */}
    //   </Grid>
    //   <Grid
    //     item
    //     lg={6}
    //     xs={12}
    //     justifyContent="center"
    //     sx={{ display: 'flex', flexDirection: 'column', mb: 15 }}
    //   >
    //     <img src={Article} style={{ height: 'auto', maxWidth: '100%' }} />
    //   </Grid>
    // </Grid>
  );
}

// return (
//   // <Container component={Paper} sx={{ mt: -4 }}>
//   <Grid
//     component={Paper}
//     sx={{
//       mt: -4,
//       mx: -5.1,
//       width: '100vw',
//       height: '100vh',
//       spacing: 0,
//       justify: 'space-around',
//     }}
//   >
//     <SvgIcon component={Article} viewBox="0 0 600 476.6" />
//     {/* <Paper>
//       <Article />
//     </Paper> */}
//   </Grid>
//   // </Container>
// );
