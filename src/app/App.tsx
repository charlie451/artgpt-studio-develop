import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from '../Templates';
import CreateImage from '../pages/CreateImage';
import GalleryPage from '../pages/GalleryPage';
import LoginPage from '../pages/LoginPage';
import { useAppSelector } from './hooks';

const App = () => {
  const { isLogin } = useAppSelector((state) => state.LoginForm);

  useEffect(() => {
    console.log('isLogin@: ', isLogin);
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<Templates />}>
            <Route index element={<CreateImage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Route>
        ) : (
          <Route path="/*" element={<LoginPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
