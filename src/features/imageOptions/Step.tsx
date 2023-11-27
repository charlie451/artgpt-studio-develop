import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSteps } from './imageOptionSlice';

const Step = () => {
  const minStepValue = 1;
  const maxStepValue = 150;
  const stepInput = useRef<HTMLInputElement>(null);
  const steps = useAppSelector((state) => state.imageOptions.steps);

  const dispatch = useAppDispatch();

  const onChangeStep = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { current } = stepInput;
      if (current) {
        current.value = e.target.value;
        dispatch(setSteps(e.target.value));
      }
    },
    [dispatch],
  );

  const checkStepValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) > maxStepValue) {
        e.target.value = maxStepValue.toString();
      }
      if (Number(e.target.value) < minStepValue) {
        e.target.value = minStepValue.toString();
      }
      dispatch(setSteps(e.target.value));
    },
    [dispatch],
  );

  return (
    <div className="column-1 ">
      <span>이미지 세부 묘사</span>
      <div className="flex items-center">
        <div className="w-2/3 container mx-auto ">
          <div className="">
            <input
              id="denoising_range"
              className="imageSizeRange "
              type={'range'}
              min={minStepValue}
              max={maxStepValue}
              value={steps}
              onChange={onChangeStep}
            ></input>
            <div className="-mt-2 flex w-full justify-between">
              <span className="text-sm text-gray-400">{minStepValue}</span>
              <span className="text-sm text-gray-400">{maxStepValue}</span>
            </div>
          </div>
        </div>

        <input
          type="number"
          className="imageSizeInput"
          ref={stepInput}
          defaultValue={steps}
          onChange={onChangeStep}
          onBlur={checkStepValue}
        ></input>
      </div>
    </div>
  );
};

export default Step;
