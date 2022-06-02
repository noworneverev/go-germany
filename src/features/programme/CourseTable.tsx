import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Chip,
  IconButton,
  Link,
  Skeleton,
  Tooltip,
  Box,
  Stack,
} from '@mui/material';
import ArticlesTooltip from './ArticlesTooltip';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';
import { Course } from '../../app/models/course';
import { MetaData } from '../../app/models/pagination';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import { useAppDispatch } from '../../app/store/configureStore';
import {
  addBookmarkCourseItem,
  removeBookmarkCourseItem,
  setBookmarkCourse,
} from '../bookmark/bookmarkSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { useState } from 'react';
import CourseColumnSwitches from './CourseColumnSwitches';
import DensityMenu from '../../app/components/DensityMenu';
import StyledTableCell from '../../app/components/StyledTableCell';
import StyledTableRow from '../../app/components/StyledTableRow';
import ReactGA from 'react-ga4';

interface Props {
  coursesLoaded: boolean;
  courses: Course[];
  // dense: boolean;
  metaData: MetaData | null;
  isInBookmark?: boolean;
}

export const renderCourseType = (type: string) => {
  switch (type) {
    case '1':
      return <Chip label="Bachelor" color="default" size={'small'} />;
    case '2':
      return <Chip label="Master" color="primary" size={'small'} />;
    case '3':
      return <Chip label="Ph.D." color="success" size={'small'} />;
    case '4':
      return <div>Cross-faculty graduate and research school</div>;
    case '5':
      return <Chip label="Language course" size={'small'} />;
    case '6':
      return <Chip label="Short course" size={'small'} />;
    case '56':
      return <div>Short course and language course</div>;
    case '7':
      return <Chip label="Prep course" size={'small'} />;
    case '9':
      return <Chip label="Various" size={'small'} />;
    default:
      break;
  }
  return;
};

export default function CourseTable({
  courses,
  coursesLoaded,
  metaData,
  isInBookmark,
}: Props) {
  const { t } = useTranslation();
  const [dense, setDense] = useState(false);
  // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDense(event.target.checked);
  // };
  const handleChangeDense = (dense: boolean) => {
    setDense(dense);
  };

  const columns = [
    { name: 'programme', label: t('course_name'), hidden: true },
    { name: 'language', label: t('course_language'), hidden: true },
    { name: 'courseType', label: t('course_type'), hidden: true },
    { name: 'subject', label: t('subject'), hidden: true },
    { name: 'university', label: t('university_name'), hidden: true },
    { name: 'tu9', label: 'TU9', hidden: true },
    { name: 'u15', label: 'U15', hidden: true },
    { name: 'article', label: t('article'), hidden: true },
  ];

  const [columnState, setColumnState] = useState({
    programme: true,
    language: true,
    courseType: true,
    subject: true,
    university: true,
    tu9: true,
    u15: true,
    article: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnState({
      ...columnState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeAll = (show: boolean) => {
    setColumnState({
      programme: show,
      language: show,
      courseType: show,
      subject: show,
      university: show,
      tu9: show,
      u15: show,
      article: show,
    });
  };

  // const { metaData } = useCourses();

  const dispatch = useAppDispatch();

  let skeletonArray = [];
  if (metaData) skeletonArray = Array(metaData?.page_size).fill('');
  else skeletonArray = Array(10).fill('');

  return (
    <>
      <Stack direction="row" spacing={0.3}>
        <CourseColumnSwitches
          columnState={columnState}
          handleChange={handleChange}
          handleChangeAll={handleChangeAll}
        />
        <DensityMenu dense={dense} handleChangeDense={handleChangeDense} />
      </Stack>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          size={dense ? 'small' : 'medium'}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell size="small"></StyledTableCell>
              {columnState.programme && (
                <StyledTableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {t('course_name')}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Box>
                </StyledTableCell>
              )}
              {columnState.language && (
                <StyledTableCell>{t('course_language')}</StyledTableCell>
              )}
              {columnState.courseType && (
                <StyledTableCell>{t('course_type')}</StyledTableCell>
              )}
              {columnState.subject && (
                <StyledTableCell>{t('subject')}</StyledTableCell>
              )}
              {columnState.university && (
                <StyledTableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {t('university_name')}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Box>
                </StyledTableCell>
              )}
              {columnState.tu9 && <StyledTableCell>TU9</StyledTableCell>}
              {columnState.u15 && <StyledTableCell>U15</StyledTableCell>}
              {columnState.article && (
                <StyledTableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {t('article')}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Box>
                </StyledTableCell>
              )}

              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!coursesLoaded &&
              skeletonArray.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="justify" size="small">
                    <Skeleton animation="wave" />
                  </StyledTableCell>
                  {columnState.programme && (
                    <StyledTableCell component="th" scope="row">
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.language && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.courseType && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.subject && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.university && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.tu9 && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.u15 && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.article && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}

                  <StyledTableCell align="justify">
                    <Skeleton animation="wave" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}

            {courses &&
              coursesLoaded &&
              courses.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="justify" size="small">
                    <Tooltip title={t('view')}>
                      <IconButton
                        component={RouterLink}
                        to={`/programme/${row.id}`}
                      >
                        <VisibilityIcon fontSize="inherit" />
                      </IconButton>
                    </Tooltip>
                  </StyledTableCell>
                  {columnState.programme && (
                    <StyledTableCell component="th" scope="row">
                      {row.is_from_daad ? (
                        <Link
                          target="_blank"
                          href={'https://www2.daad.de' + row.daadlink}
                          underline="hover"
                          color="inherit"
                        >
                          {row.name_en}
                        </Link>
                      ) : (
                        <>
                          {row.name_en}
                          <Chip
                            label="No DAAD Link"
                            size="small"
                            sx={{ ml: 1 }}
                          />
                        </>
                      )}
                    </StyledTableCell>
                  )}

                  {columnState.language && (
                    <StyledTableCell>
                      {row.languages &&
                        row.languages.map((language) => (
                          <div key={language}>{language}</div>
                        ))}
                    </StyledTableCell>
                  )}
                  {columnState.courseType && (
                    <StyledTableCell>
                      {renderCourseType(row.course_type)}
                    </StyledTableCell>
                  )}
                  {columnState.subject && (
                    <StyledTableCell>{row.subject}</StyledTableCell>
                  )}
                  {columnState.university && (
                    <StyledTableCell>
                      <Link
                        target="_blank"
                        href={row.university_link}
                        underline="hover"
                        color="inherit"
                      >
                        {row.university_name_en}
                      </Link>
                    </StyledTableCell>
                  )}
                  {columnState.tu9 && (
                    <StyledTableCell>
                      {row.is_tu9 ? <CheckIcon /> : ''}
                    </StyledTableCell>
                  )}
                  {columnState.u15 && (
                    <StyledTableCell>
                      {row.is_u15 ? <CheckIcon /> : ''}
                    </StyledTableCell>
                  )}
                  {columnState.article && (
                    <StyledTableCell>
                      {row.articles && (
                        <ArticlesTooltip articles={row.articles} />
                      )}
                    </StyledTableCell>
                  )}

                  <StyledTableCell align="justify">
                    {isInBookmark ? (
                      <IconButton
                        color="error"
                        onClick={() => {
                          removeBookmarkCourseItem(row);
                          const courses = localStorage.getItem('course');
                          if (courses) {
                            dispatch(setBookmarkCourse(JSON.parse(courses)));
                          }
                        }}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    ) : (
                      <Tooltip title={t('bookmark')}>
                        <IconButton
                          onClick={() => {
                            // addBookmarkCourseItem(row.id);
                            addBookmarkCourseItem(row);
                            if (
                              !window.location.href.includes('localhost') &&
                              process.env.REACT_APP_MEASUREMENT_ID
                            ) {
                              ReactGA.event({
                                category: 'bookmark/programme',
                                action: `Bookmark Programme: ${row.id} ${row.name_en}`,
                              });
                            }

                            const courses = localStorage.getItem('course');
                            if (courses) {
                              dispatch(setBookmarkCourse(JSON.parse(courses)));
                            }
                          }}
                        >
                          <BookmarkAddIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
