import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setHeight, setWidth } from './imageSizeSlice';

const ImageSize = () => {
  const minValue = 64;
  const maxValue = 2048;
  const dispatch = useAppDispatch();
  const [width, height] = useAppSelector((state) => [
    state.imageSize.width,
    state.imageSize.height,
  ]);

  const heightInput = useRef<HTMLInputElement>(null);
  const widthInput = useRef<HTMLInputElement>(null);

  const onChangeWidth = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { current } = widthInput;
      if (current) {
        current.value = e.target.value;
        dispatch(setWidth(e.target.value));
      }
    },
    [dispatch],
  );

  const checkWidthValue = useCallback(
    (e: any) => {
      if (e.target.value > maxValue) {
        e.target.value = maxValue;
      }
      if (e.target.value < minValue) {
        e.target.value = minValue;
      }
      dispatch(setWidth(e.target.value));
    },
    [dispatch],
  );

  const onChangeHeight = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { current } = heightInput;
      if (current) {
        current.value = e.target.value;
        dispatch(setHeight(e.target.value));
      }
    },
    [dispatch],
  );

  const checkHeightValue = useCallback(
    (e: any) => {
      if (e.target.value > maxValue) {
        e.target.value = maxValue;
      }
      if (e.target.value < minValue) {
        e.target.value = minValue;
      }
      dispatch(setHeight(e.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <span>이미지 크기</span>

      <div className="column-1 ">
        <span className="m-3">넓이</span>
        <div className="flex items-center">
          <div className="w-2/3 container mx-auto">
            <input
              id="width_range"
              className="imageSizeRange"
              type={'range'}
              step={8}
              min={minValue}
              max={maxValue}
              value={width}
              onChange={onChangeWidth}
            ></input>
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">{minValue}</span>
              <span className="text-sm text-gray-400">{maxValue}</span>
            </div>
          </div>

          <input
            type="number"
            className="imageSizeInput"
            step={8}
            ref={widthInput}
            pattern="[0-9]*"
            defaultValue={width}
            onChange={onChangeWidth}
            onBlur={checkWidthValue}
          ></input>
        </div>
      </div>

      <div className="column-1 ">
        <span className="m-3">높이</span>
        <div className="flex items-center">
          <div className="w-2/3 container mx-auto">
            <input
              id="height_range"
              className="imageSizeRange"
              type={'range'}
              step={8}
              min={minValue}
              max={maxValue}
              value={height}
              onChange={onChangeHeight}
            ></input>
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">{minValue}</span>
              <span className="text-sm text-gray-400">{maxValue}</span>
            </div>
          </div>
          <input
            type="number"
            className="imageSizeInput"
            ref={heightInput}
            step={8}
            pattern="[0-9]*"
            defaultValue={height}
            onChange={onChangeHeight}
            onBlur={checkHeightValue}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ImageSize;
