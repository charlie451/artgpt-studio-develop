import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getSamplersApi, setSamler } from './imageOptionSlice';

const Sampler = () => {
  const dispatch = useAppDispatch();
  const [isToggle, setToggle] = useState(false);
  const [samplers, selectedSamler] = useAppSelector((state) => [
    state.imageOptions.samplerList,
    state.imageOptions.selectedSamler,
  ]);

  const selectSampler = (sampler: string) => {
    dispatch(setSamler(sampler));
    setToggle(!isToggle);
  };
  useEffect(() => {
    dispatch(getSamplersApi());
  }, [dispatch]);

  return (
    <div>
      <div>샘플러</div>
      <div className="border-1 ">
        <button
          className="w-full p-2 text-left "
          onClick={() => setToggle(!isToggle)}
        >
          <div className="hover:bg-gray-700 transition duration-300">
            {selectedSamler}
            <span
              className={`float-right transform transition-transform duration-300 ${
                isToggle ? 'rotate-180' : 'rotate-0'
              }`}
            >
              &#9660;
            </span>
          </div>
        </button>
        {isToggle &&
          samplers.map((sampler, index) => (
            <div
              className="hover:bg-gray-700 transition duration-300 ml-3 cursor-pointer"
              onClick={() => selectSampler(sampler)}
            >
              <span>{sampler}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sampler;
