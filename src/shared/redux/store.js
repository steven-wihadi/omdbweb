import { configureStore } from '@reduxjs/toolkit';
import movieListParamsReducer from './features/movieListParamsSetter';
import popUpPosterConfReducer from './features/popUpPosterConfSetter';

export default configureStore({
  reducer: {
    movieListParams: movieListParamsReducer,
    popUpPosterConf: popUpPosterConfReducer
  },
});
