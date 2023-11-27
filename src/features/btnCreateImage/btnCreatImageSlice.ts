import { createSlice } from '@reduxjs/toolkit';

interface BtnCreateImageState {
  loading: boolean;
  connect: boolean;
  progress: number;
  imageList: string[];
  messages: string[];
}

const initialState: BtnCreateImageState = {
  loading: false,
  connect: false,
  progress: 0,
  imageList: [],
  messages: [],
  // error: null,
};

const btnCreatImageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    socketConnect: (state, action) => {
      console.log('dfdfdffd', action);
      // socket.connect(webSocketUrl)
      state.connect = true;
    },
    setImageList: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    sendMessage: (state, action) => {
      // Placeholder for own message
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setLoadingComplete: (state) => {
      state.loading = false;
    },
  },
});

export const {
  socketConnect,
  sendMessage,
  addMessage,
  setLoading,
  setLoadingComplete,
} = btnCreatImageSlice.actions;

export default btnCreatImageSlice.reducer;
