import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setNagativePrompt } from './nagativePromptSlice';

const NagativePrompt = () => {
  const nagativePrompt = useAppSelector(
    (state) => state.nagativePrompt.nagativePrompt,
  );

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNagativePrompt(e.target.value));
  };
  return (
    <div>
      <label htmlFor="NagativePrompt">네거티브 프롬프트</label>
      <textarea
        id="NagativePrompt"
        className="promptTextArea"
        placeholder="그림에서 빼고 싶은 내용을 입력하세요"
        onChange={onChange}
        value={nagativePrompt}
      ></textarea>
    </div>
  );
};

export default NagativePrompt;
