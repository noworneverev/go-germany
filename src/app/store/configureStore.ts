import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { accountSlice } from '../../features/account/accountSlice';
import { articleSlice } from '../../features/article/articleSlice';
import { bookmarkSlice } from '../../features/bookmark/bookmarkSlice';
import { programmeSlice } from '../../features/programme/programmeSlice';

export const store = configureStore({
  reducer: {
    programme: programmeSlice.reducer,
    bookmark: bookmarkSlice.reducer,
    article: articleSlice.reducer,
    account: accountSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
