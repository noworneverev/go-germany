import { TextField, InputAdornment } from '@mui/material';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { setArticleParams } from './articleSlice';
import SearchIcon from '@mui/icons-material/Search';

export default function ArticleSearch() {
  const { articleParams } = useAppSelector((state) => state.article);
  const [searchTerm, setSearchTerm] = useState(articleParams.searchTerm);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const debouncedSearch = debounce((event: any) => {
    dispatch(setArticleParams({ searchTerm: event.target.value }));
  }, 1000);

  return (
    <TextField
      label={t('search_programmes')}
      variant="outlined"
      fullWidth
      value={searchTerm || ''}
      onChange={(event: any) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
