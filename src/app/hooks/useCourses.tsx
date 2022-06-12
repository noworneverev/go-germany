import { useEffect } from 'react';
import {
  courseSelectors,
  fetchCoursesAsync,
  fetchFilters,
} from '../../features/programme/programmeSlice';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

export default function useCourses() {
  const courses = useAppSelector(courseSelectors.selectAll);
  const {
    coursesLoaded,
    filtersLoaded,
    metaData,
    courseParams,
    courseTypes,
    institutions,
    languages,
    subjects,
  } = useAppSelector((state) => state.programme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!coursesLoaded) {
      dispatch(fetchCoursesAsync());
    }
  }, [coursesLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  return {
    courses,
    coursesLoaded,
    courseParams,
    filtersLoaded,
    metaData,
    courseTypes,
    institutions,
    languages,
    subjects,
  };
}
