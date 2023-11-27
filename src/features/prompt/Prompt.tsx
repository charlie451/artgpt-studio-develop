import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setPrompt } from './promptSlice';

const Prompt = () => {
  const prompt = useAppSelector((state) => state.prompt.prompt);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPrompt(e.target.value));
  };
  return (
    <div className="">
      <label htmlFor="prompt">프롬프트</label>
      <textarea
        id="prompt"
        className="promptTextArea"
        rows={2}
        placeholder="그림으로 표현하고 싶은 내용을 한글로 적어 보세요"
        onChange={onChange}
        value={prompt}
      ></textarea>
    </div>
  );
};

export default Prompt;
