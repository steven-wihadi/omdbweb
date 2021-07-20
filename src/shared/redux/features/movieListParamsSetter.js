import { createSlice } from '@reduxjs/toolkit';

export const movieListParamsSetter = createSlice({
  name: 'movie-list-params',
  initialState: {
    searchInput: 'Batman',
    page: 1
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    setSearch: (state, e) => {
      state.searchInput = e.payload;
    }
  }
});

export const {
  nextPage,
  setSearch
} = movieListParamsSetter.actions;

export default movieListParamsSetter.reducer;
