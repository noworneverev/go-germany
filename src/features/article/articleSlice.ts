import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import agent from '../../app/api/agent';
import { Article, ArticleParams } from '../../app/models/article';
import { MetaData } from '../../app/models/pagination';
import { RootState } from '../../app/store/configureStore';

interface ArticleState {
  articlesLoaded: boolean;
  filtersLoaded: boolean;
  status: string;
  sources: string[];
  bsSchools: string[];
  bsDepartments: string[];
  msSchools: string[];
  msDepartments: string[];
  articleParams: ArticleParams;
  metaData: MetaData | null;
}

const articlesAdapter = createEntityAdapter<Article>();

function getAxiosParams(articleParams: ArticleParams) {
  const params = new URLSearchParams();
  params.append('pageNumber', articleParams.pageNumber.toString());
  params.append('pageSize', articleParams.pageSize.toString());
  if (articleParams.searchTerm)
    params.append('searchTerm', articleParams.searchTerm);
  if (articleParams.sources.length > 0)
    params.append('sources', articleParams.sources.toString());
  if (articleParams.bsSchools.length > 0)
    params.append('bsSchools', articleParams.bsSchools.toString());
  if (articleParams.bsDepartments.length > 0)
    params.append('bsDepartments', articleParams.bsDepartments.toString());
  if (articleParams.msSchools.length > 0)
    params.append('msSchools', articleParams.msSchools.toString());
  if (articleParams.msDepartments.length > 0)
    params.append('msDepartments', articleParams.msDepartments.toString());
  if (articleParams.courseType)
    params.append('courseType', articleParams.courseType);
  if (articleParams.hideApplication)
    params.append('hideApplication', articleParams.hideApplication.toString());

  return params;
}

export const fetchArticlesAsync = createAsyncThunk<
  Article[],
  void,
  { state: RootState }
>('article/fetchArticlesAsync', async (_, thunkAPI) => {
  const params = getAxiosParams(thunkAPI.getState().article.articleParams);
  try {
    const response = await agent.Articles.list(params);
    thunkAPI.dispatch(setArticleMetaData(response.metaData));
    return response.items.articles;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const fetchArticleAsync = createAsyncThunk<Article, number>(
  'article/fetchArticleAsync',
  async (articleId, thunkAPI) => {
    try {
      const response = await agent.Articles.fetch(articleId);
      return response.article;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchArticleFilters = createAsyncThunk(
  'article/fetchFilters',
  async (_, thunkAPI) => {
    try {
      return agent.Articles.fetchFilters();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

function initParams() {
  return {
    pageNumber: 1,
    pageSize: 10,
    sources: [],
    bsSchools: [],
    bsDepartments: [],
    msSchools: [],
    msDepartments: [],
    courseType: '2',
    hideApplication: false,
  };
}

export const articleSlice = createSlice({
  name: 'article',
  initialState: articlesAdapter.getInitialState<ArticleState>({
    articlesLoaded: false,
    filtersLoaded: false,
    status: 'idle',
    sources: [],
    bsSchools: [],
    bsDepartments: [],
    msSchools: [],
    msDepartments: [],
    articleParams: initParams(),
    metaData: null,
  }),
  reducers: {
    setArticleParams: (state, action) => {
      state.articlesLoaded = false;
      state.articleParams = {
        ...state.articleParams,
        ...action.payload,
        pageNumber: 1,
      };
    },
    setArticlePageNumber: (state, action) => {
      state.articlesLoaded = false;
      state.articleParams = { ...state.articleParams, ...action.payload };
    },
    setArticleMetaData: (state, action) => {
      state.metaData = action.payload;
    },
    resetArticleParams: (state) => {
      state.articleParams = initParams();
    },
    setArticle: (state, action) => {
      articlesAdapter.upsertOne(state, action.payload);
      state.articlesLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesAsync.pending, (state) => {
      state.status = 'pendingFetchArticles';
    });
    builder.addCase(fetchArticlesAsync.fulfilled, (state, action) => {
      if (action.payload) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.removeAll(state);
      }

      state.status = 'idle';
      state.articlesLoaded = true;
    });
    builder.addCase(fetchArticlesAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.status = 'idle';
    });

    builder.addCase(fetchArticleAsync.pending, (state) => {
      state.status = 'pendingFetchArticle';
    });
    builder.addCase(fetchArticleAsync.fulfilled, (state, action) => {
      articlesAdapter.upsertOne(state, action.payload);
      state.status = 'idle';
    });
    builder.addCase(fetchArticleAsync.rejected, (state, action) => {
      console.log(action);
      state.status = 'idle';
    });

    builder.addCase(fetchArticleFilters.pending, (state) => {
      state.status = 'pendingFetchArticleFilters';
    });
    builder.addCase(fetchArticleFilters.fulfilled, (state, action) => {
      state.sources = action.payload.articleFilters.sources;
      state.bsSchools = action.payload.articleFilters.bs_schools;
      state.bsDepartments = action.payload.articleFilters.bs_departments;
      state.msSchools = action.payload.articleFilters.ms_schools;
      state.msDepartments = action.payload.articleFilters.ms_departments;
      state.filtersLoaded = true;
      state.status = 'idle';
    });
    builder.addCase(fetchArticleFilters.rejected, (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    });
  },
});

export const articleSelectors = articlesAdapter.getSelectors(
  (state: RootState) => state.article
);

export const {
  setArticleParams,
  resetArticleParams,
  setArticleMetaData,
  setArticlePageNumber,
  setArticle,
} = articleSlice.actions;
