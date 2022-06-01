import { debounce, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { setCourseParams } from './programmeSlice';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export default function CourseSearch() {
  const { courseParams } = useAppSelector((state) => state.programme);
  const [searchTerm, setSearchTerm] = useState(courseParams.searchTerm);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const debouncedSearch = debounce((event: any) => {
    dispatch(setCourseParams({ searchTerm: event.target.value }));
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
