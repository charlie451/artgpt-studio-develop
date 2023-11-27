import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const BtnCreateImage = () => {
  const dispatch = useAppDispatch();

  const [
    prompt,
    nagativePrompt,
    size,

    referenceImage,
    denoisingStrength,
    imageOptions,
    styleId,
  ] = useAppSelector((state) => [
    state.prompt.prompt,
    state.nagativePrompt.nagativePrompt,
    state.imageSize,

    state.referenceImage,
    state.denoisingStrength,
    state.imageOptions,
    state.ImageStyles.styleId,
  ]);

  useEffect(() => {
    if (referenceImage.referenceImage) {
      dispatch({
        type: 'socket/connect',
        payload: 'ws://211.43.13.139//ws/img2img/',
      });
    } else {
      dispatch({
        type: 'socket/connect',
        payload: 'ws://211.43.13.139//ws/txt2img/',
      });
    }
    return () => {
      dispatch({ type: 'socket/disconnect' });
    };
  }, [dispatch, referenceImage]);

  const send = useCallback(() => {
    const data: {
      prompt: string;
      negative_prompt: string;
      width: number;
      height: number;
      style_id?: number;
      sampler_name: string;
      cfg_scale: number;
      steps: number;
      clip_skip: number;
      seed: number;
      init_image?: string;
      denoising_strength?: number;
    } = {
      prompt: prompt,
      negative_prompt: nagativePrompt,
      width: size.width,
      height: size.height,
      style_id: styleId,
      sampler_name: imageOptions.selectedSamler,
      cfg_scale: imageOptions.cfgScale,
      steps: imageOptions.steps,
      clip_skip: imageOptions.clipSkip,
      seed: imageOptions.seed,
    };
    // data.negative_prompt = null;
    // if (nagativePrompt === '') {
    // }
    if (referenceImage.referenceImage) {
      data.init_image = referenceImage.referenceImage;
      data.denoising_strength = denoisingStrength.denoisingStrength;
    }
    if (0 > styleId) {
      delete data.style_id;
    }
    dispatch({ type: 'socket/sendMessage', payload: data });
  }, [
    dispatch,
    prompt,
    nagativePrompt,
    size,
    referenceImage,
    denoisingStrength,
    imageOptions,
    styleId,
  ]);
  return (
    <div className="d-grid gap-2">
      <div
        className="flex relative w-full h-12 cursor-pointer rounded-lg overflow-hidden bg-blue-700"
        onClick={send}
      >
        <div className="flex  overflow-hidden bg-blue-700 "></div>
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          이미지 생성
        </div>
      </div>
    </div>
  );
};

export default BtnCreateImage;
