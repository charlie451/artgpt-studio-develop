import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setReferenceImage } from '../imageReference/imageReferenceSlice';
import { deleteImage } from './imageGallerySlice';
const ImageGallery = () => {
  const dispatch = useAppDispatch();
  const imageList = useAppSelector((state) => state.imageList.imageList);

  const sendReferenceImage = (idx: number) => {
    const imageEl = document.getElementById(`imageId-${idx}`);
    const referenceImage = imageEl as HTMLImageElement;
    dispatch(setReferenceImage(referenceImage.src));
  };

  const deleteReferenceImage = (idx: number) => {
    dispatch(deleteImage(idx));
  };

  const resize = (e: React.ChangeEvent<HTMLImageElement>) => {
    // const imageWidth = e.target.naturalWidth;
    // const imageHeight = e.target.naturalHeight;
    // let imageArea = e.target.parentElement?.parentElement?.classList;
    // if (imageHeight > imageWidth) {
    //   imageArea?.add('w-full');
    // } else if (imageWidth > imageHeight) {
    //   imageArea?.add('h-full');
    // } else {
    //   imageArea?.add('w-full');
    //   imageArea?.add('h-full');
    // }
  };

  return (
    <div
      id="galleryArea"
      className="h-full w-full "
      onScroll={() => console.log('scrolled')}
    >
      {
        imageList
          .map((image, index) => (
            <div
              className="flex justify-center  items-center flex-col border-2 border-gray-200 border-opacity-60 rounded-lg my-24"
              key={nanoid()}
            >
              <div className="group  relative flex flex-col items-center justify-center">
                <img
                  className="mx-auto  group-hover:brightness-50  object-contain "
                  id={`imageId-${index}`}
                  src={image.image}
                  alt={image.prompt}
                  // onLoad={resize}
                ></img>
                <div
                  className="font-['kccChassam'] text-3xl absolute w-auto hidden text-center cursor-default group-hover:block"
                  style={{ wordBreak: 'keep-all' }}
                >
                  {image.prompt}
                </div>
              </div>
              <div className="flex items-center  object-contain  space-x-20 ">
                <div className="cursor-pointer inline-flex items-center ">
                  <a
                    href={image.image}
                    target="_blank"
                    download={image.seed}
                    rel="noopener noreferrer"
                  >
                    다운로드
                  </a>
                </div>
                <div
                  className="cursor-pointer inline-flex items-center "
                  onClick={() => sendReferenceImage(index)}
                >
                  참조로 보내기
                </div>
                <div
                  className=" cursor-pointer inline-flex items-center "
                  onClick={() => deleteReferenceImage(index)}
                >
                  삭제하기
                </div>
              </div>
            </div>
          ))
          .reverse() //생성된 이미지의 역순으로 보여준다. 최신이미지가 상단으로
      }
    </div>
  );
};

export default ImageGallery;
