import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCfgScale } from './imageOptionSlice';

const CfgScale = () => {
  const minCfgScaleValue = 1;
  const maxCfgScaleValue = 20;
  const cfgScaleInput = useRef<HTMLInputElement>(null);

  const cfgScale = useAppSelector((state) => state.imageOptions.cfgScale);

  const dispatch = useAppDispatch();

  const onChangeCfgScale = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { current } = cfgScaleInput;
      if (current) {
        current.value = e.target.value;
        dispatch(setCfgScale(e.target.value));
      }
    },
    [dispatch],
  );

  const checkCfgScaleValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) > maxCfgScaleValue) {
        e.target.value = maxCfgScaleValue.toString();
      }
      if (Number(e.target.value) < minCfgScaleValue) {
        e.target.value = minCfgScaleValue.toString();
      }
      dispatch(setCfgScale(e.target.value));
    },
    [dispatch],
  );

  return (
    <div className="column-1 ">
      <span>프롬프트 적용 강도</span>
      <div className="flex items-center">
        <div className="w-2/3 container mx-auto ">
          <div className="">
            <input
              id="denoising_range"
              className="imageSizeRange "
              type={'range'}
              step={0.5}
              min={minCfgScaleValue}
              max={maxCfgScaleValue}
              value={cfgScale}
              onChange={onChangeCfgScale}
            ></input>
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">{minCfgScaleValue}</span>
              <span className="text-sm text-gray-400">{maxCfgScaleValue}</span>
            </div>
          </div>
        </div>

        <input
          type="number"
          className="imageSizeInput"
          step={0.5}
          ref={cfgScaleInput}
          defaultValue={cfgScale}
          onChange={onChangeCfgScale}
          onBlur={checkCfgScaleValue}
        ></input>
      </div>
    </div>
  );
};

export default CfgScale;
