import { useState } from 'react';
import CfgScale from './CfgScale';
import ClipSkip from './ClipSkip';
import Sampler from './Sampler';
import Seed from './Seed';
import Step from './Step';
const ImageOptions = () => {
  const [isToggle, setToggle] = useState(false);

  const toggleAccordion = () => {
    setToggle(!isToggle);
  };

  return (
    <div>
      <div>
        <div className="border rounded-md mb-1">
          <button
            className="w-full p-3 text-left hover:bg-gray-700 transition duration-300"
            onClick={() => toggleAccordion()}
          >
            <span>추가 설정</span>
            <span
              className={`float-right transform transition-transform duration-300 ${
                isToggle ? 'rotate-180' : 'rotate-0'
              }`}
            >
              &#9660;
            </span>
          </button>

          {isToggle && (
            <div className="m-2">
              <Sampler />
              <CfgScale />
              <Step />
              <Seed />
              <ClipSkip />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOptions;
