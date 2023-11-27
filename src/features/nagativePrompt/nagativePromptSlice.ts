import { createSlice } from '@reduxjs/toolkit';

interface NagativePropmptState {
  nagativePrompt: string;
}

const initialState = {
  nagativePrompt: '',
};

export const nagativePromptSlice = createSlice({
  name: 'nagativePrompt',
  initialState,
  reducers: {
    setNagativePrompt: (state, action) => {
      state.nagativePrompt = action.payload;
    },
  },
});

export const { setNagativePrompt } = nagativePromptSlice.actions;

export default nagativePromptSlice.reducer;
