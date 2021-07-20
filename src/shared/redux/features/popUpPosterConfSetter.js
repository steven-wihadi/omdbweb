import { createSlice } from '@reduxjs/toolkit';

export const popUpPosterConfSetter = createSlice({
  name: 'pop-up-poster-conf',
  initialState: {
    isShow: false,
    imgLink: ''
  },
  reducers: {
    setPopUpPosterConf: (state, e) => {
      state.isShow = e.payload.isShow;
      state.imgLink = e.payload.imgLink;
    }
  }
});

export const {
  setPopUpPosterConf
} = popUpPosterConfSetter.actions;

export default popUpPosterConfSetter.reducer;