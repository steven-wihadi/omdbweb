import { configureStore } from '@reduxjs/toolkit';
import movieListParamsReducer from './features/movieListParamsSetter';

export default configureStore({
  reducer: {
    movieListParams: movieListParamsReducer
  },
});
