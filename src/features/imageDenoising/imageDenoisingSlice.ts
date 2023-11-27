import { createSlice } from '@reduxjs/toolkit';

interface ImageDenoisingState {
  denoisingStrength: number;
  btnDisabled: boolean;
}

const initialState: ImageDenoisingState = {
  denoisingStrength: 0.75,
  btnDisabled: false,
};
export const imageDenoisingSlice = createSlice({
  name: 'imageDenoising',
  initialState,
  reducers: {
    setDenoisingStength: (state, action) => {
      state.denoisingStrength = action.payload;
    },
  },
});

export const { setDenoisingStength } = imageDenoisingSlice.actions;

export default imageDenoisingSlice.reducer;
