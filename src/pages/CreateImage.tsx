import { useAppSelector } from '../app/hooks';
import BtnCreateImage from '../features/btnCreateImage/BtnCreateImage';
import ImageDenoising from '../features/imageDenoising/ImageDenoising';
import ImageGallery from '../features/imageGallery/ImageGallery';
import ImageOptions from '../features/imageOptions/ImageOptions';
import ImageReference from '../features/imageReference/ImageReference';
import ImageSize from '../features/imageSize/ImageSize';
import ImageStyles from '../features/imageStyle/ImageStyles';
import NagativePrompt from '../features/nagativePrompt/NagativePrompt';
import Prompt from '../features/prompt/Prompt';
import LabelSpinner from '../features/Spinner/LabelSpinner';

const CreateImage = () => {
  const imageList = useAppSelector((state) => state.imageList);
  return (
    <>
      <LabelSpinner isLabel isOpen={imageList.btnDisabled} />
      <div className=" w-full h-full flex">
        <div className="border-gray-500  border-r-2  w-3/12 overflow-scroll grid container mx-auto">
          <div className="">
            <Prompt />
          </div>
          <div className="">
            <NagativePrompt />
          </div>
          <div className="">
            <ImageSize />
          </div>
          <div className="">
            <ImageReference />
          </div>
          <div className="">
            <ImageDenoising />
          </div>
          <div className="">
            <ImageOptions />
          </div>
          <div className="">
            <BtnCreateImage />
          </div>
        </div>
        <div className="border-r-2 border-gray-500 w-7/12  overflow-scroll container mx-auto ">
          <ImageGallery />
        </div>
        <div className=" w-2/12 container">
          <ImageStyles />
        </div>
      </div>
    </>
  );
};

export default CreateImage;
