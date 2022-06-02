import Paper from '@mui/material/Paper';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import useCourses from '../../app/hooks/useCourses';
import AppPagination from '../../app/components/AppPagination';
import { setCourseParams, setPageNumber } from './programmeSlice';
import { useAppDispatch } from '../../app/store/configureStore';
import CourseTable from './CourseTable';
import CourseSearch from './CourseSearch';
import CheckboxButtons from '../../app/components/CheckboxButtons';
import AppAccordion from '../../app/components/AppAccordion';
import AppSelectCheckboxes from '../../app/components/AppSelectCheckboxes';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

export default function Programme() {
  const { t } = useTranslation();
  // const { pathname } = useLocation();

  // const [courses, setCourses] = useState<Course[]>([]);
  // const [pageNumber, setPageNumber] = useState(3);
  // const [pageSize, setPageSize] = useState(100);

  const {
    courses,
    coursesLoaded,
    metaData,
    filtersLoaded,
    courseParams,
    courseTypes,
    institutions,
    subjects,
    languages,
  } = useCourses();
  const dispatch = useAppDispatch();

  const [dense, setDense] = useState(false);
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  useEffect(() => {
    document.title = `${t('programme_header')} | Go Germany`;
  }, [t]);

  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production')
  //     ReactGA.send({ hitType: 'pageview', page: pathname });
  // }, []);

  // useEffect(() => {
  //   const params = new URLSearchParams();
  //   params.append('pageNumber', pageNumber.toString());
  //   params.append('pageSize', pageSize.toString());

  //   agent.Courses.list(params)
  //     .then((response) => {
  //       setCourses(response.courses);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, [pageNumber, pageSize]);

  // if (!coursesLoaded) return <LoadingComponent message={t('loading')} />;
  if (!filtersLoaded) return <LoadingComponent message={t('loading')} />;
  const labels = {
    '1': 'Bachelor',
    '2': 'Master',
    '3': 'Ph.D.',
    '4': 'Cross-faculty graduate and research school',
    '5': 'Language course',
    '6': 'Short course',
    '56': 'Short course and language course',
    '7': 'Prep course',
    '9': 'Various',
  };
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item lg={2} md={2} xs={12}>
          <Stack spacing={2}>
            <Paper sx={{ boxShadow: 2 }}>
              <CourseSearch />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <AppAccordion
                title={t('course_type')}
                childComp={
                  <CheckboxButtons
                    items={courseTypes}
                    checked={courseParams.courseTypes}
                    onChange={(items: string[]) => {
                      dispatch(setCourseParams({ courseTypes: items }));
                    }}
                    labels={labels}
                  />
                }
              />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <AppAccordion
                title={t('course_language')}
                childComp={
                  <CheckboxButtons
                    items={languages}
                    checked={courseParams.languages}
                    onChange={(items: string[]) =>
                      dispatch(setCourseParams({ languages: items }))
                    }
                  />
                }
              />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <AppSelectCheckboxes
                items={subjects}
                checked={courseParams.subjects}
                onChange={(items: string[]) =>
                  dispatch(setCourseParams({ subjects: items }))
                }
                title={t('subject')}
                placeholder={t('subject')}
              />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <AppSelectCheckboxes
                items={institutions}
                checked={courseParams.institutions}
                onChange={(items: string[]) =>
                  dispatch(setCourseParams({ institutions: items }))
                }
                title={t('institution')}
                placeholder={t('institution')}
              />
            </Paper>

            <Paper sx={{ boxShadow: 2 }}>
              <AppAccordion
                title={t('istu9_u15')}
                childComp={
                  <>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={courseParams.isTu9}
                            onClick={() => {
                              dispatch(
                                setCourseParams({ isTu9: !courseParams.isTu9 })
                              );
                            }}
                          />
                        }
                        label="TU9"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={courseParams.isU15}
                            onClick={() => {
                              dispatch(
                                setCourseParams({ isU15: !courseParams.isU15 })
                              );
                            }}
                          />
                        }
                        label="U15"
                      />
                    </FormGroup>
                  </>
                }
              />
            </Paper>
            <Paper sx={{ paddingLeft: 2, boxShadow: 2, py: 0.6 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={courseParams.hasArticles}
                      onClick={() => {
                        dispatch(
                          setCourseParams({
                            hasArticles: !courseParams.hasArticles,
                          })
                        );
                      }}
                    />
                  }
                  label={t('has_articles')}
                />
              </FormGroup>
              {/* <CheckboxButtons
                items={courseTypes}
                checked={courseParams.courseTypes}
                onChange={(items: string[]) =>
                  dispatch(setCourseParams({ courseTypes: items }))
                }
                labels={labels}
              /> */}
            </Paper>
            <Paper sx={{ paddingLeft: 2, boxShadow: 2, py: 0.6 }}>
              <Typography color="text.secondary" gutterBottom sx={{ mt: 1 }}>
                {t('performance')}
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={courseParams.hideLanguageArticle}
                      onClick={() => {
                        dispatch(
                          setCourseParams({
                            hideLanguageArticle:
                              !courseParams.hideLanguageArticle,
                          })
                        );
                      }}
                    />
                  }
                  label={t('hide_language_article')}
                />
              </FormGroup>
            </Paper>
          </Stack>
        </Grid>
        <Grid item lg={10} md={10} xs={12}>
          <Paper sx={{ padding: 2, borderRadius: 3, boxShadow: 2 }}>
            {/* <SwitchesGroup columns={columns} /> */}
            <CourseTable
              courses={courses}
              coursesLoaded={coursesLoaded}
              metaData={metaData}
            />
            {metaData && (
              <Box sx={{ mt: 2 }}>
                <AppPagination
                  metaData={metaData}
                  onPageNumberChange={(page: number) =>
                    dispatch(setPageNumber({ pageNumber: page }))
                  }
                  onPageSizeChange={(pageSize: number) =>
                    dispatch(setPageNumber({ pageSize: pageSize }))
                  }
                />
              </Box>
            )}
            {/* <FormControlLabel
              control={
                <Switch
                  checked={dense}
                  onChange={handleChangeDense}
                  color="primary"
                />
              }
              label={t('dense_padding')}
            /> */}
          </Paper>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </>
  );
}
