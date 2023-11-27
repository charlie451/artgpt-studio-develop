import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLoginApi } from './loginFormSlice';
import LabelSpinner from '../Spinner/LabelSpinner';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  // state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, isLogin } = useAppSelector((state) => state.LoginForm);

  const onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLoginButton = () => {
    console.log(username, password);
    dispatch(
      setLoginApi({
        email: username,
        password: password,
      }),
    );
  };

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('enter');
      onClickLoginButton();
    }
  };

  useEffect(() => {
    console.log('isLoading: ', isLoading);
  }, [isLoading]);

  return (
    <div
      id="login-form"
      className="h-full w-full flex flex-col items-center justify-center"
    >
      <LabelSpinner isOpen={isLoading} />
      <div id="username-wrap" className="flex gray-900 w-3/4 mb-[10px]">
        <div className="h-[50px] min-w-[50px] flex items-center justify-center rounded-l-[4px] bg-neutral-200 border-y border-l border-gray-400 ">
          <span className="ri-user-fill text-[30px] text-center text-neutral-400">
            
          </span>
        </div>
        <input
          className="h-[50px] w-full text-sm py-2 px-3 border-1 border-gray-400 text-gray-900 rounded-r-[4px] focus:outline-none"
          type="text"
          placeholder="아이디를 입력하세요"
          autoComplete="anuta-username"
          onChange={onChangeUser}
          onKeyDown={handleOnKeyPress}
        />
      </div>
      <div id="password-wrap" className="flex w-3/4 mb-[20px]">
        <div className="h-[50px] min-w-[50px] flex items-center justify-center rounded-l-[4px] bg-neutral-200 border-y border-l border-gray-400 ">
          <span className="ri-key-2-fill text-[30px] text-center text-neutral-400">
            
          </span>
        </div>
        <input
          className="h-[50px] w-full text-sm py-2 px-3 border-1 border-gray-400 text-gray-900 rounded-r-[4px] focus:outline-none"
          type="password"
          placeholder="패스워드를 입력하세요"
          autoComplete="anuta-password"
          onChange={onChangePassword}
          onKeyDown={handleOnKeyPress}
        />
      </div>
      <div id="button-form" className="w-3/4 mb-40">
        <button
          className="h-[40px] w-full rounded-[4px] text-white bg-neutral-600"
          type="submit"
          onClick={() => {
            onClickLoginButton();
          }}
        >
          로그인
        </button>
        <div className="h-full w-full flex justify-end mt-[20px]">
          <button>
            <p className="text-white">회원가입</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
