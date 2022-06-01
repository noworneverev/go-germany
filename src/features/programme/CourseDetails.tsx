import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { courseSelectors, fetchCourseAsync } from './programmeSlice';
import ExperienceTable from './ExperienceTable';
import CourseCard from './CourseCard';
import LoadingComponent from '../../app/layout/LoadingComponent';
import CourseDetailTable from './CourseDetailTable';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {
  addBookmarkCourseItem,
  setBookmarkCourse,
} from '../bookmark/bookmarkSlice';

export default function CourseDetails() {
  const { id } = useParams();
  const course = useAppSelector((state) =>
    courseSelectors.selectById(state, id!)
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [view, setView] = useState('list');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string | null
  ) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const { status: programmeStatus } = useAppSelector(
    (state) => state.programme
  );

  useEffect(() => {
    if (!course) dispatch(fetchCourseAsync(parseInt(id!)));
    else if (!course.articles) {
      dispatch(fetchCourseAsync(parseInt(id!)));
    }
  }, [id, dispatch, course]);

  if (!course) return <LoadingComponent />;

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="flex-end">
        <Box sx={{ mr: 1 }}>
          <Stack direction="row" spacing={1}>
            <Tooltip title={t('bookmark')}>
              <IconButton
                size="large"
                onClick={() => {
                  addBookmarkCourseItem(course);
                  const courses = localStorage.getItem('course');
                  if (courses) {
                    dispatch(setBookmarkCourse(JSON.parse(courses)));
                  }
                }}
              >
                <BookmarkAddIcon />
              </IconButton>
            </Tooltip>
            <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
              <ToggleButton value="list" aria-label="list">
                <Tooltip title={t('table_view')}>
                  <ViewListIcon />
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="module" aria-label="module">
                <Tooltip title={t('card_view')}>
                  <ViewModuleIcon />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Box>
      </Grid>

      {view === 'list' ? (
        <CourseDetailTable course={course} />
      ) : (
        <CourseCard course={course} />
      )}

      <ExperienceTable course={course} />
      {/* <Footer /> */}
    </Container>
  );
}
