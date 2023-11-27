import {
  setBtnDisabled,
  setImageList,
  setProgress,
} from '../features/imageGallery/imageGallerySlice';
export const socketMiddleware = (socket) => (params) => (next) => (action) => {
  const { type } = action;

  switch (type) {
    case 'socket/connect':
      console.log(action.payload);

      console.log('connect');
      socket.connect(action.payload);

      socket.on('open', () => {
        console.log('open');
      });
      socket.on('message', (data) => {
        const receiveData = JSON.parse(data.data);
        const progressPercent = receiveData.payload.progress_percent;

        next(setProgress(progressPercent));
        next(setBtnDisabled(true));

        if (receiveData.payload.seed) {
          const image = {};
          image.prompt = receiveData.payload.prompt;
          image.seed = receiveData.payload.seed;
          image.image = receiveData.payload.image[0];

          next(setImageList(image));
          // next(setProgress(1));
          next(setBtnDisabled(false));
        }
      });
      socket.on('close', () => {
        console.log('close');
        // socket.connect();
      });
      break;
    case 'socket/sendMessage':
      // next(setProgress(0));
      next(setBtnDisabled(false));
      socket.send(action.payload);
      break;
    case 'socket/disconnect':
      console.log('disconnect');
      socket.disconnect();
      break;

    default:
      break;
  }

  return next(action);
};
