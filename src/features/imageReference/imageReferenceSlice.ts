import { createSlice } from '@reduxjs/toolkit';

interface ImageReferenceState {
  referenceImage: string;
}

const initialState: ImageReferenceState = {
  referenceImage: '',
};
export const imageReferenceSlice = createSlice({
  name: 'imageReference',
  initialState,
  reducers: {
    setReferenceImage: (state, action) => {
      state.referenceImage = action.payload;
    },
    deleteReferenceImage: (state) => {
      state.referenceImage = '';
    },
  },
});

export const { setReferenceImage, deleteReferenceImage } =
  imageReferenceSlice.actions;

export default imageReferenceSlice.reducer;
