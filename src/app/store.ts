import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counter1Slide from '../features/counter1/counter1Slice';
import postSlide from '../features/posts/postSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter1:counter1Slide,
    post:postSlide
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
