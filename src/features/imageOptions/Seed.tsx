import { useAppDispatch } from '../../app/hooks';
import { setSeed } from './imageOptionSlice';

const Seed = () => {
  const dispatch = useAppDispatch();

  const onChangeSeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeed(e.target.value));
  };

  return (
    <div>
      <span>이미지 고유 번호</span>
      <div className="flex items-center ">
        <input
          type="text"
          className="promptTextArea"
          onChange={onChangeSeed}
        ></input>
        <span className="w-full text-sm text-center text-gray-400">
          이미지 고유 번호 무시
        </span>
        <input type="checkbox" className=""></input>
      </div>
    </div>
  );
};

export default Seed;
