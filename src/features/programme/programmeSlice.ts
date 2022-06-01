import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import agent from '../../app/api/agent';
import { Course, CourseParams } from '../../app/models/course';
import { MetaData } from '../../app/models/pagination';
import { RootState } from '../../app/store/configureStore';

interface ProgrammeState {
  coursesLoaded: boolean;
  filtersLoaded: boolean;
  status: string;
  languages: string[];
  subjects: string[];
  institutions: string[];
  courseTypes: string[];
  courseParams: CourseParams;
  metaData: MetaData | null;
}

const coursesAdapter = createEntityAdapter<Course>();

function getAxiosParams(courseParams: CourseParams) {
  const params = new URLSearchParams();
  params.append('pageNumber', courseParams.pageNumber.toString());
  params.append('pageSize', courseParams.pageSize.toString());
  if (courseParams.searchTerm)
    params.append('searchTerm', courseParams.searchTerm);
  if (courseParams.courseTypes.length > 0)
    params.append('courseTypes', courseParams.courseTypes.toString());
  if (courseParams.languages.length > 0)
    params.append('languages', courseParams.languages.toString());
  if (courseParams.subjects.length > 0)
    params.append('subjects', courseParams.subjects.join(';'));
  // params.append('subjects', courseParams.subjects.toString());
  if (courseParams.institutions.length > 0)
    params.append('institutions', courseParams.institutions.toString());
  if (courseParams.isTu9) params.append('isTu9', courseParams.isTu9.toString());
  if (courseParams.isU15) params.append('isU15', courseParams.isU15.toString());
  if (courseParams.hasArticles)
    params.append('hasArticles', courseParams.hasArticles.toString());
  if (courseParams.hideLanguageArticle)
    params.append(
      'hideLanguageArticle',
      courseParams.hideLanguageArticle.toString()
    );
  // params.append('orderBy', courseParams.orderBy);
  return params;
}

export const fetchCoursesAsync = createAsyncThunk<
  Course[],
  void,
  { state: RootState }
>('programme/fetchCoursesAsync', async (_, thunkAPI) => {
  const params = getAxiosParams(thunkAPI.getState().programme.courseParams);
  try {
    const response = await agent.Courses.list(params);
    thunkAPI.dispatch(setMetaData(response.metaData));

    return response.items.courses;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const fetchCourseAsync = createAsyncThunk<Course, number>(
  'programme/fetchCourseAsync',
  async (courseId, thunkAPI) => {
    try {
      const response = await agent.Courses.fetch(courseId);
      return response.course;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchFilters = createAsyncThunk(
  'programme/fetchFilters',
  async (_, thunkAPI) => {
    try {
      return agent.Courses.fetchFilters();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

function initParams() {
  return {
    pageNumber: 1,
    pageSize: 10,
    courseTypes: [],
    languages: [],
    subjects: [],
    institutions: [],
    hasArticles: false,
    hideLanguageArticle: false,
    // orderBy: 'name',
  };
}

export const programmeSlice = createSlice({
  name: 'programme',
  initialState: coursesAdapter.getInitialState<ProgrammeState>({
    coursesLoaded: false,
    filtersLoaded: false,
    status: 'idle',
    languages: [],
    subjects: [],
    institutions: [],
    courseTypes: [],
    courseParams: initParams(),
    metaData: null,
  }),
  reducers: {
    setCourseParams: (state, action) => {
      state.coursesLoaded = false;
      state.courseParams = {
        ...state.courseParams,
        ...action.payload,
        pageNumber: 1,
      };
    },
    setPageNumber: (state, action) => {
      state.coursesLoaded = false;
      state.courseParams = { ...state.courseParams, ...action.payload };
    },
    setMetaData: (state, action) => {
      state.metaData = action.payload;
    },
    resetCourseParams: (state) => {
      state.courseParams = initParams();
    },
    setCourse: (state, action) => {
      coursesAdapter.upsertOne(state, action.payload);
      state.coursesLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoursesAsync.pending, (state) => {
      state.status = 'pendingFetchCourses';
    });
    builder.addCase(fetchCoursesAsync.fulfilled, (state, action) => {
      if (action.payload) {
        coursesAdapter.setAll(state, action.payload);
      } else {
        coursesAdapter.removeAll(state);
      }

      state.status = 'idle';
      state.coursesLoaded = true;
    });
    builder.addCase(fetchCoursesAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.status = 'idle';
    });

    builder.addCase(fetchCourseAsync.pending, (state) => {
      state.status = 'pendingFetchCourse';
    });
    builder.addCase(fetchCourseAsync.fulfilled, (state, action) => {
      coursesAdapter.upsertOne(state, action.payload);
      state.status = 'idle';
    });
    builder.addCase(fetchCourseAsync.rejected, (state, action) => {
      console.log(action);
      state.status = 'idle';
    });

    builder.addCase(fetchFilters.pending, (state) => {
      state.status = 'pendingFetchFilters';
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.languages = action.payload.filters.languages;
      state.subjects = action.payload.filters.subjects;
      state.institutions = action.payload.filters.institutions;
      state.courseTypes = action.payload.filters.course_types;
      state.filtersLoaded = true;
      state.status = 'idle';
    });
    builder.addCase(fetchFilters.rejected, (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    });
  },
});

export const courseSelectors = coursesAdapter.getSelectors(
  (state: RootState) => state.programme
);

export const {
  setCourseParams,
  resetCourseParams,
  setMetaData,
  setPageNumber,
  setCourse,
} = programmeSlice.actions;
