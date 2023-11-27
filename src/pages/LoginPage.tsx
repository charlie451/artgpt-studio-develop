import React from 'react';
import LoginForm from '../features/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="bg-gray-900 h-screen w-full flex flex-col items-center justify-center">
      <div id="wrapper" className="w-1/3 flex flex-col p-4">
        <div
          id="title"
          className="h-16 w-full flex items-center justify-center mb-10"
        >
          <h1 className="text-4xl text-white font-bold">anuta AI canvas</h1>
        </div>

        <LoginForm />
      </div>

      <div className="bg-white bottom-10">tset</div>
    </div>
  );
};

export default LoginPage;
