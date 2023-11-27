import { createSlice } from '@reduxjs/toolkit';

interface ImageGalleryState {
  imageList: any[];
  progress: number;
  btnDisabled: boolean;
}

const initialState: ImageGalleryState = {
  imageList: [],
  progress: 0,
  btnDisabled: false,
};
export const imageGallerySlice = createSlice({
  name: 'imageGallery',
  initialState,
  reducers: {
    setImageList: (state, action) => {
      const image: {
        image: string;
        prompt: string;
        seed: number;
      } = {
        image: '',
        prompt: '',
        seed: 0,
      };
      const base64img = 'data:image/png;base64,' + action.payload.image;
      image.image = base64img;
      image.prompt = action.payload.prompt;
      image.seed = action.payload.seed;
      state.imageList.push(image);
      if (state.imageList.length > 5) {
        state.imageList.splice(0, 1);
      }
    },
    deleteImage: (state, action) => {
      state.imageList.splice(action.payload, 1);
    },
    setProgress: (state, action) => {
      state.progress = Number((action.payload * 100).toFixed(0));
    },
    setBtnDisabled: (state, action) => {
      state.btnDisabled = action.payload;
    },
  },
});

export const { setImageList, setProgress, setBtnDisabled, deleteImage } =
  imageGallerySlice.actions;

export default imageGallerySlice.reducer;
