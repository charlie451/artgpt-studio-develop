// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ImageStylesState {
  styles: any[];
  styleId: number;
  statusCode: string;
}

const initialState: ImageStylesState = {
  styles: [],
  styleId: -1,
  statusCode: '',
};

export const getImageStylesApi = createAsyncThunk(
  // string action type value: 이 값에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 자동 생성된다.
  'style/list',
  // payloadCreator callback: 비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수
  async () => {
    const response = await fetch('http://211.43.13.139/api/style/list');
    let json = await response.json();
    // The value we return becomes the `fulf
    console.log(json);
    return json.payload;
  },
);

const ImageStylesSlice = createSlice({
  name: 'ImageStyles',
  initialState,
  reducers: {
    setStyleId: (state, action) => {
      console.log('test');
      state.styleId = action.payload;
    },
  },
  //createSlice reducers가 아닌 외부 reducers를 정의한다.
  extraReducers: (builder) => {
    builder
      .addCase(getImageStylesApi.pending, (state) => {
        console.log('getImageStyles pending');
        state.statusCode = 'loading';
      })
      .addCase(getImageStylesApi.fulfilled, (state, action) => {
        console.log('action', action);
        state.styles = action.payload;
      })
      .addCase(getImageStylesApi.rejected, (state) => {
        console.log('getImageStyles Rejected');
        state.statusCode = 'failed';
      });
  },
});

export const { setStyleId } = ImageStylesSlice.actions;

export default ImageStylesSlice.reducer;
