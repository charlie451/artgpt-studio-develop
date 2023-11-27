import { createSlice } from '@reduxjs/toolkit';

interface ImageSizeState {
  width: number;
  height: number;
}

const initialState: ImageSizeState = {
  width: 512,
  height: 512,
};

export const imageSizeSlice = createSlice({
  name: 'imageSize',
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const { setWidth, setHeight } = imageSizeSlice.actions;

export default imageSizeSlice.reducer;
