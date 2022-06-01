import { Box, Container, Grid, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import {
  addBookmarkArticleItem,
  addBookmarkCourseItem,
  setBookmarkArticle,
  setBookmarkCourse,
} from '../bookmark/bookmarkSlice';
import ApplicationTable from './ApplicationTable';
import ArticleDetailTable from './ArticleDetailTable';
import { articleSelectors, fetchArticleAsync } from './articleSlice';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

export default function ArticleDetails() {
  const { id } = useParams();
  const article = useAppSelector((state) =>
    articleSelectors.selectById(state, id!)
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (!article) dispatch(fetchArticleAsync(parseInt(id!)));
    else if (!article.courses) {
      dispatch(fetchArticleAsync(parseInt(id!)));
    }
  }, [id, dispatch, article]);

  if (!article) return <LoadingComponent />;

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="flex-end">
        <Box sx={{ mr: 0.5 }}>
          <Tooltip title={t('bookmark')}>
            <IconButton
              size="large"
              onClick={() => {
                addBookmarkArticleItem(article);
                const articles = localStorage.getItem('article');
                if (articles) {
                  dispatch(setBookmarkArticle(JSON.parse(articles)));
                }
              }}
            >
              <BookmarkAddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Grid>
      {article && <ArticleDetailTable article={article} />}
      {article && <ApplicationTable article={article} />}
    </Container>
  );
}
