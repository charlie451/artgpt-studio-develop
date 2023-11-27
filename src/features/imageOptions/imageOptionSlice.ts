import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ImageOptionState {
  seed: number;
  cfgScale: number;
  steps: number;
  clipSkip: number;
  samplerList: string[];
  selectedSamler: string;
}

const initialState: ImageOptionState = {
  seed: -1,
  cfgScale: 5,
  steps: 20,
  clipSkip: 2,
  samplerList: [],
  selectedSamler: 'Euler a',
};

export const getSamplersApi = createAsyncThunk(
  // string action type value: 이 값에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 자동 생성된다.
  'samplers/list',
  // payloadCreator callback: 비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수
  async () => {
    const response = await fetch('http://211.43.13.139/api/samplers');
    let json = await response.json();
    // The value we return becomes the `fulf
    console.log(json);
    return json.payload;
  },
);
export const imageOptionSlice = createSlice({
  name: 'imageOptionSlice',
  initialState,
  reducers: {
    setCfgScale: (state, action) => {
      state.cfgScale = action.payload;
    },
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
    setClipSkip: (state, action) => {
      state.clipSkip = action.payload;
    },
    setSeed: (state, action) => {
      state.seed = action.payload;
    },
    setSamler: (state, action) => {
      state.selectedSamler = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSamplersApi.pending, (state) => {
        console.log('getSamplersApi pending');
        state.samplerList.push('loading');
      })
      .addCase(getSamplersApi.fulfilled, (state, action) => {
        console.log('getSamplersApi action', action);
        state.samplerList = action.payload;
      })
      .addCase(getSamplersApi.rejected, (state) => {
        console.log('getSamplersApi Rejected');
        state.samplerList.push('failed');
      });
  },
});

export const { setCfgScale, setSteps, setClipSkip, setSeed, setSamler } =
  imageOptionSlice.actions;

export default imageOptionSlice.reducer;
