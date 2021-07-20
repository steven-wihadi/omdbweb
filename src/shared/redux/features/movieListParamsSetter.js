import { createSlice } from '@reduxjs/toolkit';

export const movieListParamsSetter = createSlice({
  name: 'movie-list-params',
  initialState: {
    searchInput: 'Batman'
  },
  reducers: {
    setSearch: (state, e) => {
      state.searchInput = e.payload;
    }
  }
});

export const {
  setSearch
} = movieListParamsSetter.actions;

export default movieListParamsSetter.reducer;
