import React, { useEffect } from 'react';
import {
  articleSelectors,
  fetchArticleFilters,
  fetchArticlesAsync,
} from '../../features/article/articleSlice';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

export default function useArticles() {
  const articles = useAppSelector(articleSelectors.selectAll);
  const {
    articlesLoaded,
    filtersLoaded,
    metaData,
    articleParams,
    sources,
    bsSchools,
    bsDepartments,
    msSchools,
    msDepartments,
  } = useAppSelector((state) => state.article);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articlesLoaded) dispatch(fetchArticlesAsync());
  }, [articlesLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchArticleFilters());
  }, [dispatch, filtersLoaded]);

  return {
    articles,
    articlesLoaded,
    filtersLoaded,
    metaData,
    articleParams,
    sources,
    bsSchools,
    bsDepartments,
    msSchools,
    msDepartments,
  };
}
