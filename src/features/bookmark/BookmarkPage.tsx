import { Container, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../app/store/configureStore';
import ArticleTable from '../article/ArticleTable';
import CourseTable from '../programme/CourseTable';

export default function BookmarkPage() {
  const { courses, articles } = useAppSelector((state) => state.bookmark);
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('bookmark_header')} | Go Germany`;
  }, [t]);

  return (
    <Container maxWidth="xl">
      <Paper sx={{ padding: 2, borderRadius: 3, boxShadow: 2, mb: 2 }}>
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {t('programme_header')}
        </Typography>
        <CourseTable
          courses={courses}
          coursesLoaded={true}
          metaData={null}
          isInBookmark={true}
        />
      </Paper>
      <Paper sx={{ padding: 2, borderRadius: 3, boxShadow: 2 }}>
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {t('article_header')}
        </Typography>
        <ArticleTable
          articles={articles}
          articlesLoaded={true}
          metaData={null}
          isInBookmark={true}
        />
      </Paper>
    </Container>
  );
}
