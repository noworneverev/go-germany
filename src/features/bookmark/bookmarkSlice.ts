import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Article } from '../../app/models/article';
import { Bookmark } from '../../app/models/bookmark';
import { Course } from '../../app/models/course';

interface BookmarkState {
  courses: Course[];
  articles: Article[];
  status: string;
}

const initialState: BookmarkState = {
  // bookmark: null,
  courses: [],
  articles: [],
  status: 'idle',
};

export const fetchBookmarkCourse = () => {
  const course = localStorage.getItem('course');
  if (course) return JSON.parse(course);
  else return [];
};

export const addBookmarkCourseItem = (course: Course) => {
  const localStorageCourse = localStorage.getItem('course');
  if (localStorageCourse) {
    const newCourses: Course[] = JSON.parse(localStorageCourse);
    if (newCourses.find((x) => x.id === course.id)) return;

    newCourses.push(course);
    localStorage.setItem('course', JSON.stringify(newCourses));
  } else {
    const newCourses = [course];
    localStorage.setItem('course', JSON.stringify(newCourses));
  }
};

export const addBookmarkArticleItem = (article: Article) => {
  const localStorageArticle = localStorage.getItem('article');
  if (localStorageArticle) {
    const newArticles: Article[] = JSON.parse(localStorageArticle);
    if (newArticles.find((x) => x.id === article.id)) return;

    newArticles.push(article);
    localStorage.setItem('article', JSON.stringify(newArticles));
  } else {
    const newArticles = [article];
    localStorage.setItem('article', JSON.stringify(newArticles));
  }
};

export const removeBookmarkCourseItem = (course: Course) => {
  const localStorageCourse = localStorage.getItem('course');
  if (localStorageCourse) {
    const courses: Course[] = JSON.parse(localStorageCourse);
    localStorage.setItem(
      'course',
      JSON.stringify(courses.filter((x) => x.id !== course.id))
    );
  }
};

export const removeBookmarkArticleItem = (article: Article) => {
  const localStorageArticle = localStorage.getItem('article');
  if (localStorageArticle) {
    const articles: Article[] = JSON.parse(localStorageArticle);
    localStorage.setItem(
      'article',
      JSON.stringify(articles.filter((x) => x.id !== article.id))
    );
  }
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    setBookmarkCourse: (state, action) => {
      state.courses = action.payload;
    },
    setBookmarkArticle: (state, action) => {
      state.articles = action.payload;
    },
  },
});

// export const { setBookmark, clearBookmark } = bookmarkSlice.actions;
export const { setBookmarkCourse, setBookmarkArticle } = bookmarkSlice.actions;
