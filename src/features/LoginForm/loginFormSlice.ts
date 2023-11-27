import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface LoginFormState {
  isLoading: boolean;
  isLogin: boolean;
}

const initialState: LoginFormState = {
  isLoading: false,
  isLogin: false,
};

interface SetLoginParamType {
  email: string;
  password: string;
}

export const setLoginApi = createAsyncThunk(
  'account/login',
  async (info: SetLoginParamType) => {
    const response = await fetch('http://211.43.13.139/api/account/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: info.email,
        password: info.password,
      }),
    });
    let data = await response.json();
    return data;
  },
);

const LoginFormSlice = createSlice({
  name: 'LoginForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setLoginApi.pending, (state) => {
        state.isLoading = true;
        state.isLogin = false;
      })
      .addCase(setLoginApi.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.code === '200') {
          state.isLogin = true;
        }
      })
      .addCase(setLoginApi.rejected, (state) => {
        state.isLoading = false;
        state.isLogin = false;
      });
  },
});

export default LoginFormSlice.reducer;
