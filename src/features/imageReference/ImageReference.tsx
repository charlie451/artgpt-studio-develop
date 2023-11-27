import { faFileImage, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteReferenceImage, setReferenceImage } from './imageReferenceSlice';

const ImageReference = () => {
  const referenceImage = useAppSelector(
    (state) => state.referenceImage.referenceImage,
  );
  const dispatch = useAppDispatch();
  const referemceImageInput = useRef<HTMLInputElement>(null);

  const closeReferenceImage = () => {
    dispatch(deleteReferenceImage());
  };

  const openReferenceImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    } else {
    }
    reader.onload = () => {
      dispatch(setReferenceImage(reader.result));
      console.log('setImage');
    };
  };

  return (
    <div>
      <div>이미지 참조</div>
      <div className="relative flex items-center justify-center">
        {referenceImage !== '' ? (
          <div className="group relative flex items-center justify-center">
            <img
              className="group-hover:brightness-75"
              src={referenceImage}
              alt={'test'}
            ></img>
            <div className="absolute w-auto hidden cursor-pointer group-hover:flex">
              <FontAwesomeIcon
                icon={faTrashCan}
                size="3x"
                onClick={closeReferenceImage}
              />
            </div>
          </div>
        ) : (
          <div>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              ref={referemceImageInput}
              onChange={openReferenceImage}
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faFileImage}
              size="2x"
              onClick={() => {
                referemceImageInput.current?.click();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageReference;
