import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getImageStylesApi, setStyleId } from './ImageStylesSlice';
const ImageStyles = () => {
  const [selectedIndex, setSeletedIndex] = useState(-1);

  const dispatch = useAppDispatch();

  const styles = useAppSelector((state) => state.ImageStyles.styles);

  const selectBtn = (idx: number, styleId: number) => {
    if (selectedIndex === idx) {
      setSeletedIndex(-1);
      dispatch(setStyleId(-1));
    } else {
      setSeletedIndex(idx);
      dispatch(setStyleId(styleId));
    }
    console.log(styleId);
  };
  useEffect(() => {
    dispatch(getImageStylesApi());
  }, [dispatch]);

  return (
    <div className="m-1">
      <div className="">
        <div>스타일 인터페이스</div>
      </div>
      <div className="">
        <div>더 쉽게, 더 멋지게.</div>
        <div>스타일은 계속 추가됩니다.</div>
      </div>
      <div className="h-full w-full">
        {styles.length === 0 &&
          styles.map((style, index) => (
            <div
              className=" m-[10px] text-center flex flex-col  items-center justify-center    "
              role="group"
            >
              <button
                key={style.id}
                className={`rounded-lg border-1  group flex flex-col items-center justify-center ${
                  selectedIndex === index && selectedIndex > -1
                    ? ' ring-4 ring-white '
                    : ''
                }`}
                onClick={() => selectBtn(index, style.id)}
              >
                <img
                  className="rounded-lg  group-hover:brightness-50"
                  id={`styleId_${index}`}
                  src={'data:image/png;base64,' + style.image}
                  alt={style.name}
                  width={256}
                  height={256}
                ></img>
                <div
                  className="font-['kccChassam'] text-xl absolute w-auto hidden cursor-default group-hover:block"
                  id={`styleNameId_${index}`}
                >
                  {style.prompt_ko}
                </div>
              </button>
              <div>{style.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageStyles;
