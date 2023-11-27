import { createSlice } from '@reduxjs/toolkit';

interface PromptState {
  prompt: string;
}

const initialState: PromptState = {
  prompt: '',
};

export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
  },
});

export const { setPrompt } = promptSlice.actions;

export default promptSlice.reducer;
