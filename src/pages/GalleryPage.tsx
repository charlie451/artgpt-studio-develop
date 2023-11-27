import React from 'react';
import UserGallery from '../features/userGallery/UserGallery';

const GalleryPage = () => {
  return (
    <div className="p-8 w-full h-full overflow-y-scroll">
      <UserGallery />
    </div>
  );
};

export default GalleryPage;
