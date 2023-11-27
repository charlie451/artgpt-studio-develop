import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setClipSkip } from './imageOptionSlice';

const ClipSkip = () => {
  const minSkipValue = 1;
  const maxSkipValue = 12;
  const skipInput = useRef<HTMLInputElement>(null);
  const skip = useAppSelector((state) => state.imageOptions.clipSkip);

  const dispatch = useAppDispatch();

  const onChangeClipSkip = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { current } = skipInput;
      if (current) {
        current.value = e.target.value;
        dispatch(setClipSkip(Number(e.target.value)));
      }
    },
    [dispatch],
  );

  const checkClipSkipValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) > maxSkipValue) {
        e.target.value = maxSkipValue.toString();
      }
      if (Number(e.target.value) < minSkipValue) {
        e.target.value = minSkipValue.toString();
      }
      dispatch(setClipSkip(Number(e.target.value)));
    },
    [dispatch],
  );

  return (
    <div className="column-1 ">
      <span>프롬프트 분석 횟수</span>
      <div className="flex items-center">
        <div className="w-2/3 container mx-auto ">
          <div className="">
            <input
              id="denoising_range"
              className="imageSizeRange "
              type={'range'}
              min={minSkipValue}
              max={maxSkipValue}
              value={skip}
              onChange={onChangeClipSkip}
            ></input>
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">{minSkipValue}</span>
              <span className="text-sm text-gray-400">{maxSkipValue}</span>
            </div>
          </div>
        </div>

        <input
          type="number"
          className="imageSizeInput"
          ref={skipInput}
          defaultValue={skip}
          onChange={onChangeClipSkip}
          onBlur={checkClipSkipValue}
        ></input>
      </div>
    </div>
  );
};

export default ClipSkip;
