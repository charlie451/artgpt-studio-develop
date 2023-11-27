import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getImageSelectApi, getUserGalleryApi } from './UserGallerySlice';
import { Link } from 'react-router-dom';
import LabelSpinner from '../Spinner/LabelSpinner';

const UserGallery = () => {
  // state
  const [dateList, setDateList] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const { isLoadingGallery, isLoadingSelect, imageListData, imageSelectData } =
    useAppSelector((state) => state.UserGallery);

  useEffect(() => {
    dispatch(getUserGalleryApi());
  }, []);

  const onClickImg = (id: number) => {
    dispatch(getImageSelectApi(id));
  };

  const sortDateList = (arr: string[]) => {
    arr.sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);

      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      return 0;
    });

    return arr;
  };

  useEffect(() => {
    console.log('imageListData: ', imageListData);
    setDateList(sortDateList(Object.keys(imageListData)));
  }, [imageListData]);

  return (
    <div className="overflow-x-hidden">
      <LabelSpinner isOpen={isLoadingGallery} />
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-normal">홍길동의 갤러리</div>
        <Link to="/">
          <div className="text-base font-normal">메인 화면으로 돌아가기</div>
        </Link>
      </div>

      {dateList.map((element, index) => {
        return (
          <div
            className="w-full text-base font-normal mb-6 last:mb-0"
            key={element}
          >
            <div className="mb-3 font-semibold">{element}</div>
            <div className="flex flex-wrap">
              {imageListData[element].map((el, idx) => {
                return (
                  <img
                    className="object-cover	mr-2 mb-4 last:mr-0 last:mb-0 cursor-pointer"
                    key={el.id}
                    src={'data:image/png;base64,' + el.image}
                    onClick={() => onClickImg(el.id)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserGallery;
