import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Skeleton,
  IconButton,
  Tooltip,
  Link,
  Stack,
  Typography,
  Chip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Article } from '../../app/models/article';
import { MetaData } from '../../app/models/pagination';
import { useAppDispatch } from '../../app/store/configureStore';
import LaunchIcon from '@mui/icons-material/Launch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink } from 'react-router-dom';
import { renderDate } from '../../app/utils/utils';
import { renderCourseType } from '../programme/CourseTable';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { renderResultChip } from '../programme/ArticlesTooltip';
import {
  addBookmarkArticleItem,
  removeBookmarkArticleItem,
  setBookmarkArticle,
} from '../bookmark/bookmarkSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import ArticleColumnSwitches from './ArticleColumnSwitches';
import DensityMenu from '../../app/components/DensityMenu';
import StyledTableCell from '../../app/components/StyledTableCell';
import StyledTableRow from '../../app/components/StyledTableRow';
import ReactGA from 'react-ga4';

interface Props {
  articlesLoaded: boolean;
  articles: Article[];
  metaData: MetaData | null;
  isInBookmark?: boolean;
}

export default function ArticleTable({
  articles,
  articlesLoaded,
  metaData,
  isInBookmark,
}: Props) {
  const { t } = useTranslation();
  const [dense, setDense] = useState(false);
  const handleChangeDense = (dense: boolean) => {
    setDense(dense);
  };
  const dispatch = useAppDispatch();

  const [columnState, setColumnState] = useState({
    author: true,
    title: true,
    application: true,
    date: false,
    courseType: false,
    source: false,
    bsSchool: true,
    bsDepartment: true,
    bsGpa: true,
    msSchool: false,
    msDepartment: false,
    msGpa: false,
    toefl: true,
    ielts: true,
    gre: true,
    gmat: false,
    testdaf: false,
    goethe: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnState({
      ...columnState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeAll = (show: boolean) => {
    setColumnState({
      author: show,
      title: show,
      application: show,
      date: show,
      courseType: show,
      source: show,
      bsSchool: show,
      bsDepartment: show,
      bsGpa: show,
      msSchool: show,
      msDepartment: show,
      msGpa: show,
      toefl: show,
      ielts: show,
      gre: show,
      gmat: show,
      testdaf: show,
      goethe: show,
    });
  };

  let skeletonArray = [];
  if (metaData) skeletonArray = Array(metaData?.page_size).fill('');
  else skeletonArray = Array(10).fill('');

  return (
    <>
      <Stack direction="row" spacing={0.3}>
        <ArticleColumnSwitches
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
              {columnState.author && (
                <StyledTableCell>{t('author')}</StyledTableCell>
              )}

              {columnState.title && (
                <StyledTableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {t('title')}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Box>
                </StyledTableCell>
              )}
              {columnState.application && (
                <StyledTableCell>{t('application')}</StyledTableCell>
              )}
              {columnState.date && (
                <StyledTableCell>{t('published_date')}</StyledTableCell>
              )}
              {columnState.courseType && (
                <StyledTableCell>{t('course_type')}</StyledTableCell>
              )}
              {columnState.source && (
                <StyledTableCell>{t('source')}</StyledTableCell>
              )}
              {columnState.bsSchool && (
                <StyledTableCell>{t('author_bs_school')}</StyledTableCell>
              )}
              {columnState.bsDepartment && (
                <StyledTableCell>{t('author_bs_department')}</StyledTableCell>
              )}
              {columnState.bsGpa && (
                <StyledTableCell>{t('author_bs_gpa')}</StyledTableCell>
              )}
              {columnState.msSchool && (
                <StyledTableCell>{t('author_ms_school')}</StyledTableCell>
              )}
              {columnState.msDepartment && (
                <StyledTableCell>{t('author_ms_department')}</StyledTableCell>
              )}
              {columnState.msGpa && (
                <StyledTableCell>{t('author_ms_gpa')}</StyledTableCell>
              )}
              {columnState.toefl && (
                <StyledTableCell>{t('toefl')}</StyledTableCell>
              )}
              {columnState.ielts && (
                <StyledTableCell>{t('ielts')}</StyledTableCell>
              )}
              {columnState.gre && <StyledTableCell>{t('gre')}</StyledTableCell>}
              {columnState.gmat && (
                <StyledTableCell>{t('gmat')}</StyledTableCell>
              )}
              {columnState.testdaf && (
                <StyledTableCell>{t('testdaf')}</StyledTableCell>
              )}
              {columnState.goethe && (
                <StyledTableCell>{t('goethe')}</StyledTableCell>
              )}

              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!articlesLoaded &&
              skeletonArray.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="justify" size="small">
                    <Skeleton animation="wave" />
                  </StyledTableCell>
                  {columnState.author && (
                    <StyledTableCell component="th" scope="row">
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.title && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.application && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.date && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.courseType && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.source && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.bsSchool && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.bsDepartment && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.bsGpa && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.msSchool && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.msDepartment && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.msGpa && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.toefl && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.ielts && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.gre && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.gmat && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.testdaf && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}
                  {columnState.goethe && (
                    <StyledTableCell>
                      <Skeleton animation="wave" />
                    </StyledTableCell>
                  )}

                  <StyledTableCell align="justify">
                    <Skeleton animation="wave" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}

            {articles &&
              articlesLoaded &&
              articles.map((article) => (
                <StyledTableRow key={article.id}>
                  <StyledTableCell align="justify" size="small">
                    <Tooltip title={t('view')}>
                      <IconButton
                        component={RouterLink}
                        to={`/article/${article.id}`}
                      >
                        <VisibilityIcon fontSize="inherit" />
                      </IconButton>
                    </Tooltip>
                  </StyledTableCell>
                  {columnState.author && (
                    <StyledTableCell component="th" scope="row">
                      {article.author}
                    </StyledTableCell>
                  )}
                  {columnState.title && (
                    <StyledTableCell sx={{ minWidth: 200 }}>
                      <Typography variant="body2" color="text.secondary">
                        {renderDate(article.published_at)}
                      </Typography>

                      <Link
                        target="_blank"
                        href={article.link}
                        underline="hover"
                        color="inherit"
                      >
                        {article.title}
                      </Link>
                    </StyledTableCell>
                  )}
                  {columnState.application && (
                    <StyledTableCell sx={{ minWidth: 300 }}>
                      <ul>
                        {article.courses &&
                          article.courses.map(
                            ({ course, result, is_decision }) => (
                              <li key={course.id}>
                                <Link
                                  component={RouterLink}
                                  underline="hover"
                                  color="inherit"
                                  to={`/programme/${course.id}`}
                                  sx={{ mr: 1 }}
                                >
                                  {course.university_name_en} | {course.name_en}
                                </Link>
                                {renderResultChip(result)}
                                {is_decision && (
                                  <Chip
                                    label="Decision"
                                    size="small"
                                    color="success"
                                    variant="outlined"
                                    sx={{ ml: 1 }}
                                  />
                                )}
                              </li>
                            )
                          )}
                      </ul>
                    </StyledTableCell>
                  )}
                  {columnState.date && (
                    <StyledTableCell>
                      {renderDate(article.published_at)}
                    </StyledTableCell>
                  )}
                  {columnState.courseType && (
                    <StyledTableCell>
                      {renderCourseType(article.course_type)}
                    </StyledTableCell>
                  )}
                  {columnState.source && (
                    <StyledTableCell>{article.source}</StyledTableCell>
                  )}
                  {columnState.bsSchool && (
                    <StyledTableCell>
                      {/* {article.author_bs_school} */}
                      {article.author_bs_school_short}
                    </StyledTableCell>
                  )}
                  {columnState.bsDepartment && (
                    <StyledTableCell>
                      {article.author_bs_department}
                    </StyledTableCell>
                  )}
                  {columnState.bsGpa && (
                    <StyledTableCell>{article.author_bs_gpa}</StyledTableCell>
                  )}
                  {columnState.msSchool && (
                    <StyledTableCell>
                      {article.author_ms_school}
                    </StyledTableCell>
                  )}
                  {columnState.msDepartment && (
                    <StyledTableCell>
                      {article.author_ms_department}
                    </StyledTableCell>
                  )}
                  {columnState.msGpa && (
                    <StyledTableCell>{article.author_ms_gpa}</StyledTableCell>
                  )}
                  {columnState.toefl && (
                    <StyledTableCell>{article.author_toefl}</StyledTableCell>
                  )}
                  {columnState.ielts && (
                    <StyledTableCell>{article.author_ielts}</StyledTableCell>
                  )}
                  {columnState.gre && (
                    <StyledTableCell>{article.author_gre}</StyledTableCell>
                  )}
                  {columnState.gmat && (
                    <StyledTableCell>{article.author_gmat}</StyledTableCell>
                  )}
                  {columnState.testdaf && (
                    <StyledTableCell>{article.author_testdaf}</StyledTableCell>
                  )}
                  {columnState.goethe && (
                    <StyledTableCell>{article.author_goethe}</StyledTableCell>
                  )}

                  <StyledTableCell align="justify">
                    {isInBookmark ? (
                      <IconButton
                        color="error"
                        onClick={() => {
                          removeBookmarkArticleItem(article);
                          const articles = localStorage.getItem('article');
                          if (articles) {
                            dispatch(setBookmarkArticle(JSON.parse(articles)));
                          }
                        }}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    ) : (
                      <Tooltip title={t('bookmark')}>
                        <IconButton
                          onClick={() => {
                            addBookmarkArticleItem(article);
                            if (
                              !window.location.href.includes('localhost') &&
                              process.env.REACT_APP_MEASUREMENT_ID
                            ) {
                              ReactGA.event({
                                category: 'bookmark/article',
                                action: `Bookmark Article: ${article.id}, ${article.author}, ${article.title}`,
                              });
                            }

                            const articles = localStorage.getItem('article');
                            if (articles) {
                              dispatch(
                                setBookmarkArticle(JSON.parse(articles))
                              );
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
