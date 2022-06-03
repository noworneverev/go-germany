import {
  Paper,
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Chip,
  Link,
  Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DensityMenu from '../../app/components/DensityMenu';
import StyledTableCell from '../../app/components/StyledTableCell';
import { Article } from '../../app/models/article';
import LaunchIcon from '@mui/icons-material/Launch';
import StyledTableRow from '../../app/components/StyledTableRow';
import { renderCourseType } from '../programme/CourseTable';
import CheckIcon from '@mui/icons-material/Check';
import ArticlesTooltip, {
  renderResultChip,
} from '../programme/ArticlesTooltip';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  article: Article;
}

export default function ApplicationTable({ article }: Props) {
  const { t } = useTranslation();
  const [dense, setDense] = useState(false);
  const handleChangeDense = (dense: boolean) => {
    setDense(dense);
  };
  // console.log(article);

  return (
    <Paper sx={{ padding: 2, borderRadius: 3, m: 1, mt: 2, boxShadow: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {t('application')}
        </Typography>
        <DensityMenu dense={dense} handleChangeDense={handleChangeDense} />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} size={dense ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
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
              {/* <StyledTableCell>{t('course_language')}</StyledTableCell> */}
              <StyledTableCell>{t('result')}</StyledTableCell>
              <StyledTableCell>{t('course_type')}</StyledTableCell>
              <StyledTableCell>{t('subject')}</StyledTableCell>
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
              <StyledTableCell>TU9</StyledTableCell>
              <StyledTableCell>U15</StyledTableCell>
              {/* <StyledTableCell>
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
              </StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {article.courses &&
              article.courses.map(({ course, result, is_decision }) => (
                <StyledTableRow key={course.id}>
                  <StyledTableCell component="th" scope="row">
                    <Link
                      component={RouterLink}
                      underline="hover"
                      color="inherit"
                      to={`/programme/${course.id}`}
                      sx={{ mr: 1 }}
                    >
                      {course.university_name_en} | {course.name_en}
                    </Link>

                    {/* {course.is_from_daad ? (
                      <Link
                        target="_blank"
                        href={'https://www2.daad.de' + course.daadlink}
                        underline="hover"
                        color="inherit"
                      >
                        {course.name_en}
                      </Link>
                    ) : (
                      <>
                        {course.name_en}
                        <Chip
                          label="No DAAD Link"
                          size="small"
                          sx={{ ml: 1 }}
                        />
                      </>
                    )} */}
                  </StyledTableCell>
                  {/* <StyledTableCell>
                  {course.languages &&
                    course.languages.map((language) => (
                      <div key={language}>{language}</div>
                    ))}
                </StyledTableCell> */}
                  <StyledTableCell>
                    {/* <Stack spacing={0.5} direction="row"> */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                      }}
                    >
                      <Box>{renderResultChip(result)}</Box>
                      {is_decision && (
                        <Box sx={{ mt: 0.5 }}>
                          <Chip
                            label="Decision"
                            size="small"
                            color="success"
                            variant="outlined"
                          />
                        </Box>
                      )}
                    </Box>
                    {/* </Stack> */}
                  </StyledTableCell>
                  <StyledTableCell>
                    {renderCourseType(course.course_type)}
                  </StyledTableCell>
                  <StyledTableCell>{course.subject}</StyledTableCell>
                  <StyledTableCell>
                    {course.university_link ? (
                      <Link
                        target="_blank"
                        href={course.university_link}
                        underline="hover"
                        color="inherit"
                      >
                        {course.university_name_en}
                      </Link>
                    ) : (
                      <>{course.university_name_en}</>
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {course.is_tu9 ? <CheckIcon /> : ''}
                  </StyledTableCell>
                  <StyledTableCell>
                    {course.is_u15 ? <CheckIcon /> : ''}
                  </StyledTableCell>
                  {/* <StyledTableCell>
                  {course.articles && (
                    <ArticlesTooltip articles={course.articles} />
                  )}
                </StyledTableCell> */}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
