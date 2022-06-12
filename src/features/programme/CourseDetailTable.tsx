import { useState } from 'react';
import { Course } from '../../app/models/course';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import { Box, Chip, Link, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { renderCourseType } from './CourseCard';
import CheckIcon from '@mui/icons-material/Check';
import DensityMenu from '../../app/components/DensityMenu';
import StyledTableCell from '../../app/components/StyledTableCell';
import StyledTableRow from '../../app/components/StyledTableRow';

interface Props {
  course: Course;
}

export default function CourseDetailTable({ course }: Props) {
  const { t } = useTranslation();
  const [dense, setDense] = useState(false);
  const handleChangeDense = (dense: boolean) => {
    setDense(dense);
  };

  return (
    <Paper sx={{ padding: 2, borderRadius: 3, m: 1, mt: 2, boxShadow: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {t('programme_info')}
        </Typography>
        <DensityMenu dense={dense} handleChangeDense={handleChangeDense} />
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          size={dense ? 'small' : 'medium'}
        >
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('course_name')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                {course.is_from_daad ? (
                  <Link
                    target="_blank"
                    href={'https://www2.daad.de' + course?.daadlink}
                    underline="hover"
                    color="inherit"
                  >
                    <Typography>
                      {course.name_en}
                      <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                    </Typography>
                  </Link>
                ) : (
                  <>
                    <Typography>{course.name_en}</Typography>
                    <Chip label="No DAAD Link" size="small" />
                  </>
                )}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>{t('subject')}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{course.subject}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('university_name')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Link
                  target="_blank"
                  href={course.university_link}
                  underline="hover"
                  color="inherit"
                >
                  <Typography>
                    {course.university_name_en}
                    <LaunchIcon fontSize="small" sx={{ ml: 1 }} />
                  </Typography>
                </Link>
              </StyledTableCell>
            </StyledTableRow>

            {course.university_name_ch && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>
                    {t('university_chinese')}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{course.university_name_ch}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('course_type')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{renderCourseType(course.course_type)}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('course_language')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                {course.languages &&
                  course.languages.map((l) => (
                    <Typography key={l}>{l}</Typography>
                  ))}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('duration')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{course.programme_duration}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>{t('tuition')}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{course.tuition_fees}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('application_deadline')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <div
                  dangerouslySetInnerHTML={{
                    __html: course.application_deadline,
                  }}
                  style={{ fontSize: '1rem' }}
                />
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>
                  {t('beginning')}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{course.beginning}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 500 }}>{t('city')}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography>{course.city}</Typography>
              </StyledTableCell>
            </StyledTableRow>

            {course.is_tu9 && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>TU9</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>
                    <CheckIcon />
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}

            {course.is_u15 && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 500 }}>U15</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>
                    <CheckIcon />
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
