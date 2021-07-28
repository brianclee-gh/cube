/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import './Image.css';

function Image({ images }) {
  const [currentImage, setCurrentImage] = useState({
    active: images[0].url,
    allImages: images,
  });

  const changeMainPhoto = (image) => {
    setCurrentImage({ ...currentImage, active: image });
  };

  return (
    <div className="Image-Component">
      <img className="Main-Image" src={currentImage.active} alt="currentProduct" />
      {currentImage.allImages.map((image) => (
        <ImageThumbnails
          thumbnail={image.thumbnail_url}
          key={image.url.slice(28)}
          changeMainPhoto={() => { changeMainPhoto(image.thumbnail_url)}}
          currentActive={currentImage.active}
        />
      ))}
    </div>
  );
}

export default Image;
