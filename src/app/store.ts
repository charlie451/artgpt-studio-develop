import { configureStore } from '@reduxjs/toolkit';

import { Socket } from '../common/utils/Socket';
import denoisingReducer from '../features/imageDenoising/imageDenoisingSlice';
import imageListReducer from '../features/imageGallery/imageGallerySlice';
import imageOptionsReducer from '../features/imageOptions/imageOptionSlice';
import referenceImageReducer from '../features/imageReference/imageReferenceSlice';
import sizeReducer from '../features/imageSize/imageSizeSlice';

import ImageStylesReducer from '../features/imageStyle/ImageStylesSlice';
import nagativePromptReducer from '../features/nagativePrompt/nagativePromptSlice';
import promptReducer from '../features/prompt/promptSlice';
import UserGalleryReducer from '../features/userGallery/UserGallerySlice';
import { socketMiddleware } from '../middleware/socket';
import loginFormReducer from '../features/LoginForm/loginFormSlice';

export const store = configureStore({
  reducer: {
    imageSize: sizeReducer,
    prompt: promptReducer,
    imageList: imageListReducer,
    referenceImage: referenceImageReducer,
    denoisingStrength: denoisingReducer,
    imageOptions: imageOptionsReducer,
    nagativePrompt: nagativePromptReducer,
    ImageStyles: ImageStylesReducer,
    UserGallery: UserGalleryReducer,
    LoginForm: loginFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware(new Socket())),
});

//추후에 필요에 따라 참조할 수 있도록 RootState type과 Dispatch type을 추출함.
//스토어에서 이러한 타입들을 추론한다는 것은 state slice를 추가하거나 미들웨어 세팅을 수정할 때 올바르게 업데이트 된다는 것을 의미

//RooteState와 AppDispatch가 스토어 자체에서 추론된다.
export type RootState = ReturnType<typeof store.getState>;
// 추론된 타입:
// Inferred type: {imageSize: ImageSizeStates, prompt: PromptState, imageList: ImageListState ...}
export type AppDispatch = typeof store.dispatch;

export default store;
