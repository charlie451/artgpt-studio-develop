import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserGalleryState {
  isLoadingGallery: boolean;
  isLoadingSelect: boolean;

  imageListData: {
    [key: string]: {
      id: number;
      image: string;
    }[];
  };
  imageSelectData: {
    image: string;
    prompt: string;
    negative_prompt: string;
    width: number;
    height: number;
    steps: number;
    seed: number;
    cfg_scale: number;
    denoising_strength: number;
    sampler_name: string;
    create_date: string;
    user: string;
    style: string | null;
  };
}

const initialState: UserGalleryState = {
  isLoadingGallery: false,
  isLoadingSelect: false,
  imageListData: {},
  imageSelectData: {
    image: '',
    prompt: '',
    negative_prompt: '',
    width: 0,
    height: 0,
    steps: 0,
    seed: 0,
    cfg_scale: 0,
    denoising_strength: 0,
    sampler_name: '',
    create_date: '',
    user: '',
    style: null,
  },
};

export const getUserGalleryApi = createAsyncThunk('image/list', async () => {
  const response = await fetch('http://211.43.13.139/api/image/list');
  let data = await response.json();
  return data.payload;
});

export const getImageSelectApi = createAsyncThunk(
  'image/select',
  async (id: number) => {
    const response = await fetch(
      `http://211.43.13.139/api/image/select?id=${id}`,
    );
    let data = await response.json();
    return data.payload;
  },
);

const UserGallerySlice = createSlice({
  name: 'UserGallery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 갤러리 조회
      .addCase(getUserGalleryApi.pending, (state) => {
        state.isLoadingGallery = true;
      })
      .addCase(getUserGalleryApi.fulfilled, (state, action) => {
        state.isLoadingGallery = false;
        state.imageListData = action.payload;
      })
      .addCase(getUserGalleryApi.rejected, (state, action) => {
        state.isLoadingGallery = false;
        state.imageListData = {};
      })

      // 이미지 상세 데이터
      .addCase(getImageSelectApi.pending, (state) => {
        state.isLoadingSelect = true;
      })
      .addCase(getImageSelectApi.fulfilled, (state, action) => {
        state.isLoadingSelect = false;
        state.imageSelectData = action.payload;
      })
      .addCase(getImageSelectApi.rejected, (state, action) => {
        state.isLoadingSelect = false;
        state.imageSelectData = {
          image: '',
          prompt: '',
          negative_prompt: '',
          width: 0,
          height: 0,
          steps: 0,
          seed: 0,
          cfg_scale: 0,
          denoising_strength: 0,
          sampler_name: '',
          create_date: '',
          user: '',
          style: null,
        };
      });
  },
});

export default UserGallerySlice.reducer;
