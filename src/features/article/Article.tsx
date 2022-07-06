import { Box, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppPagination from '../../app/components/AppPagination';
import useArticles from '../../app/hooks/useArticles';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch } from '../../app/store/configureStore';
import { setArticlePageNumber } from './articleSlice';
import ArticleTable from './ArticleTable';
import { useLocation } from 'react-router-dom';
import ArticleFilters from './ArticleFilters';

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
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    document.title = `${t('article_header')} | Go Germany`;
  }, [t]);

  if (!filtersLoaded) return <LoadingComponent message={t('loading')} />;

  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {expanded && (
          <Grid item lg={2} md={2} xs={12}>
            <ArticleFilters />
          </Grid>
        )}

        <Grid item lg={expanded ? 10 : 12} md={expanded ? 10 : 12} xs={12}>
          <Paper sx={{ padding: 2, borderRadius: 3, boxShadow: 2 }}>
            <ArticleTable
              articles={articles}
              articlesLoaded={articlesLoaded}
              metaData={metaData}
              expanded={expanded}
              setExpanded={setExpanded}
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
