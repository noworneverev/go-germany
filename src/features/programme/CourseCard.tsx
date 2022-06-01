import {
  Grid,
  Card,
  CardContent,
  Stack,
  Box,
  Typography,
  Chip,
  CardMedia,
  Link,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LaunchIcon from '@mui/icons-material/Launch';
import { Course } from '../../app/models/course';
import City from '../../static/undraw_city_life_gnpr.svg';
import TU9 from '../../static/tu9.png';
import U15 from '../../static/German_U15.png';
import { useState } from 'react';

interface Props {
  course: Course;
}

export const renderCourseType = (type: string) => {
  let degree = '';
  switch (type) {
    case '1':
      degree = "Bachelor's degree";
      break;
    case '2':
      degree = "Master's degree";
      break;
    case '3':
      degree = 'Ph.D. / Doctorate';
      break;
    case '4':
      degree = 'Cross-faculty graduate and research school';
      break;
    case '5':
      degree = 'Language course';
      break;
    case '6':
      degree = 'Short course';
      break;
    case '56':
      degree = 'Short course and language course';
      break;
    case '7':
      degree = 'Prep course';
      break;
    case '9':
      degree = 'Various';
      break;
    default:
      break;
  }
  return degree;
};

export default function CourseCard({ course }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid
          item
          lg={3.83}
          xs={12}
          sm={12}
          md={5.752}
          component={Card}
          sx={{
            margin: 1,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('course_name')}
                </Typography>
                {course?.is_from_daad ? (
                  <Link
                    target="_blank"
                    href={'https://www2.daad.de' + course?.daadlink}
                    underline="hover"
                    color="inherit"
                  >
                    <Typography variant="h5" component="div">
                      {course?.name_en}
                      <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                    </Typography>
                  </Link>
                ) : (
                  <>
                    <Typography variant="h5" component="div">
                      {course?.name_en}
                    </Typography>
                    <Chip label="No DAAD Link" size="small" />
                  </>
                )}
              </Box>
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('subject')}
                </Typography>
                <Typography variant="h5" component="div">
                  {course?.subject}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Grid>

        <Grid
          item
          lg={3.83}
          xs={12}
          sm={12}
          md={5.752}
          component={Card}
          sx={{
            margin: 1,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('university_name')}
                </Typography>

                <Link
                  target="_blank"
                  href={course?.university_link}
                  underline="hover"
                  color="inherit"
                >
                  <Typography variant="h5" component="div">
                    {course?.university_name_en}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Typography>
                </Link>
              </Box>

              {course?.university_name_ch && (
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    {t('university_chinese')}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {course?.university_name_ch}
                  </Typography>
                </Box>
              )}
            </Stack>
          </CardContent>
        </Grid>

        <Grid
          item
          lg={3.83}
          xs={12}
          sm={12}
          md={5.752}
          component={Card}
          sx={{
            margin: 1,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="160"
            src={City}
            alt="green iguana"
          />
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {t('city')}
            </Typography>

            <Typography variant="h5" component="div">
              {course?.city}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          lg={3.83}
          xs={12}
          sm={12}
          md={5.752}
          component={Card}
          sx={{
            margin: 1,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          {/* <CardMedia
            component="img"
            height="160"
            src={Professor}
            alt="course language"
          /> */}
          <CardContent>
            <Stack spacing={2}>
              {course?.course_type && (
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    {t('course_type')}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {renderCourseType(course.course_type)}
                  </Typography>
                </Box>
              )}
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('course_language')}
                </Typography>

                {course &&
                  course.languages &&
                  course.languages.map((l) => (
                    <Typography variant="h5" component="div" key={l}>
                      {l}
                    </Typography>
                  ))}
              </Box>
            </Stack>
          </CardContent>
        </Grid>

        <Grid
          item
          lg={3.83}
          xs={12}
          sm={12}
          md={5.752}
          component={Card}
          sx={{
            margin: 1,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('beginning')}
                </Typography>

                {course?.beginning && (
                  <Typography variant="h5" component="div">
                    {course?.beginning}
                  </Typography>
                )}
              </Box>
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('duration')}
                </Typography>

                {course?.programme_duration && (
                  <Typography variant="h5" component="div">
                    {course?.programme_duration}
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography color="text.secondary" gutterBottom>
                  {t('tuition')}
                </Typography>

                {course?.tuition_fees && (
                  <Typography variant="h5" component="div">
                    {course?.tuition_fees}
                  </Typography>
                )}
              </Box>
            </Stack>
          </CardContent>
        </Grid>

        {(course?.is_tu9 || course?.is_u15) && (
          <Grid
            item
            lg={3.83}
            xs={12}
            sm={12}
            md={5.752}
            component={Card}
            sx={{
              margin: 1,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Stack spacing={2}>
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    {course.is_tu9 ? 'TU9' : 'U15'}
                  </Typography>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src={course.is_tu9 ? TU9 : U15} width="300" />
                  </Grid>
                </Box>
              </Stack>
            </CardContent>
          </Grid>
        )}
      </Grid>
      {course?.application_deadline && (
        <Grid
          item
          lg={3.83}
          xs={12}
          sm={12}
          md={5.752}
          component={Card}
          sx={{
            margin: 1,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          {/* <CardMedia
            component="img"
            height="160"
            src={City}
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {t('application_deadline')}
            </Typography>
            {/* <div>{ReactHtmlParser(course.application_deadline)}</div> */}
            <div
              dangerouslySetInnerHTML={{ __html: course.application_deadline }}
            />
          </CardContent>
        </Grid>
      )}
    </>
  );
}
