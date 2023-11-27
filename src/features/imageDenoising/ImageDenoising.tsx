import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setDenoisingStength } from './imageDenoisingSlice';

const ImageDenoising = () => {
  const minValue = 0.0;
  const maxValue = 1;
  const dispatch = useAppDispatch();
  const denoisingStrength = useAppSelector(
    (state) => state.denoisingStrength.denoisingStrength,
  );

  const denoisingStrengthInput = useRef<HTMLInputElement>(null);

  const onChangeDenoising = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { current } = denoisingStrengthInput;
      let value = Number(e.target.value);

      if (Number(e.target.value) > maxValue) {
        value = maxValue;
      }
      if (Number(e.target.value) < minValue) {
        value = minValue;
        e.target.value = value.toString();
      }
      if (current) {
        current.value = value.toString();
        dispatch(setDenoisingStength(value));
      }
    },
    [dispatch],
  );

  return (
    <div>
      <div className="column-1 ">
        <div className="">
          <span>이미지 참조 강도</span>
          <span className="text-xs text-gray-400 m-3">
            숫자가 적을 수록 원본 이미지와 유사
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-2/3 container mx-auto ">
            <div className="">
              <input
                id="denoising_range"
                className="imageSizeRange "
                type={'range'}
                step={0.01}
                min={minValue}
                max={maxValue}
                value={denoisingStrength}
                onChange={onChangeDenoising}
              ></input>
              <div className="-mt-2 flex w-full justify-between">
                <span className="text-sm text-gray-400">{minValue}</span>
                <span className="text-sm text-gray-400">{maxValue}</span>
              </div>
            </div>
          </div>

          <input
            type="number"
            className="imageSizeInput"
            step={0.01}
            ref={denoisingStrengthInput}
            defaultValue={denoisingStrength}
            onChange={onChangeDenoising}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ImageDenoising;
