import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppAccordion from '../../app/components/AppAccordion';
import AppPagination from '../../app/components/AppPagination';
import AppSelectCheckboxes from '../../app/components/AppSelectCheckboxes';
import CheckboxButtons from '../../app/components/CheckboxButtons';
import RadioButtonGroup from '../../app/components/RadioButtonGroup';
import useArticles from '../../app/hooks/useArticles';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch } from '../../app/store/configureStore';
import ArticleSearch from './ArticleSearch';
import { setArticlePageNumber, setArticleParams } from './articleSlice';
import ArticleTable from './ArticleTable';
import { useLocation } from 'react-router-dom';

const courseTypeOptions = [
  { value: '2', label: 'Master' },
  { value: '3', label: 'Ph.D.' },
];

export default function Article() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const {
    articles,
    articlesLoaded,
    metaData,
    filtersLoaded,
    articleParams,
    sources,
    bsSchools,
    bsDepartments,
    msSchools,
    msDepartments,
  } = useArticles();
  const dispatch = useAppDispatch();

  const [dense, setDense] = useState(false);
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  useEffect(() => {
    document.title = `${t('article_header')} | Go Germany`;
  }, [t]);

  if (!filtersLoaded) return <LoadingComponent message={t('loading')} />;

  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item lg={2} md={2} xs={12}>
          <Stack spacing={2}>
            <Paper sx={{ boxShadow: 2 }}>
              <ArticleSearch />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <Box sx={{ mx: 2, mt: 2, mb: 1 }}>
                <Typography gutterBottom>{t('course_type')}</Typography>
                <RadioButtonGroup
                  selectedValue={articleParams.courseType}
                  options={courseTypeOptions}
                  onChange={(e) =>
                    dispatch(setArticleParams({ courseType: e.target.value }))
                  }
                />
              </Box>
              {/* <AppAccordion
                title={t('course_type')}
                childComp={
                  <RadioButtonGroup
                    selectedValue={articleParams.courseType}
                    options={courseTypeOptions}
                    onChange={(e) =>
                      dispatch(setArticleParams({ courseType: e.target.value }))
                    }
                  />
                }
              /> */}
            </Paper>

            <Paper sx={{ boxShadow: 2 }}>
              <AppAccordion
                title={t('source')}
                childComp={
                  <CheckboxButtons
                    items={sources}
                    checked={articleParams.sources}
                    onChange={(items: string[]) =>
                      dispatch(setArticleParams({ sources: items }))
                    }
                  />
                }
              />
            </Paper>

            <Paper sx={{ boxShadow: 2 }}>
              <AppSelectCheckboxes
                items={bsSchools}
                checked={articleParams.bsSchools}
                onChange={(items: string[]) =>
                  dispatch(setArticleParams({ bsSchools: items }))
                }
                title={t('author_bs_school')}
                placeholder={t('author_bs_school')}
              />
            </Paper>

            <Paper sx={{ boxShadow: 2 }}>
              <AppSelectCheckboxes
                items={bsDepartments}
                checked={articleParams.bsDepartments}
                onChange={(items: string[]) =>
                  dispatch(setArticleParams({ bsDepartments: items }))
                }
                title={t('author_bs_department')}
                placeholder={t('author_bs_department')}
              />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <AppSelectCheckboxes
                items={msSchools}
                checked={articleParams.msSchools}
                onChange={(items: string[]) =>
                  dispatch(setArticleParams({ msSchools: items }))
                }
                title={t('author_ms_school')}
                placeholder={t('author_ms_school')}
              />
            </Paper>
            <Paper sx={{ boxShadow: 2 }}>
              <AppSelectCheckboxes
                items={msDepartments}
                checked={articleParams.msDepartments}
                onChange={(items: string[]) =>
                  dispatch(setArticleParams({ msDepartments: items }))
                }
                title={t('author_ms_department')}
                placeholder={t('author_ms_department')}
              />
            </Paper>
            <Paper sx={{ paddingLeft: 2, boxShadow: 2, py: 0.6 }}>
              <Typography color="text.secondary" gutterBottom sx={{ mt: 1 }}>
                {t('performance')}
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={articleParams.hideApplication}
                      onClick={() => {
                        dispatch(
                          setArticleParams({
                            hideApplication: !articleParams.hideApplication,
                          })
                        );
                      }}
                    />
                  }
                  label={t('hide_application')}
                />
              </FormGroup>
            </Paper>
          </Stack>
        </Grid>
        <Grid item lg={10} md={10} xs={12}>
          <Paper sx={{ padding: 2, borderRadius: 3, boxShadow: 2 }}>
            <ArticleTable
              articles={articles}
              articlesLoaded={articlesLoaded}
              metaData={metaData}
            />
            {metaData && (
              <Box sx={{ mt: 2 }}>
                <AppPagination
                  metaData={metaData}
                  onPageNumberChange={(page: number) =>
                    dispatch(setArticlePageNumber({ pageNumber: page }))
                  }
                  onPageSizeChange={(pageSize: number) =>
                    dispatch(setArticlePageNumber({ pageSize: pageSize }))
                  }
                />
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
