/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import './Image.css';

function Image({ images }) {
  const [currentImage, setCurrentImage] = useState({
    active: images[0].url,
    allImages: images,
    index: 0,
  });

  const changeMainPhoto = (image, photoIndex) => {
    setCurrentImage({ ...currentImage, active: image, index: photoIndex });
  };

  const nextPhoto = () => {
    const length = currentImage.allImages.length - 1;
    const imageIndex = currentImage.index === length ? 0 : currentImage.index + 1;
    setCurrentImage({
      ...currentImage,
      active: currentImage.allImages[imageIndex].thumbnail_url,
      index: imageIndex,
    });
  };

  const prevPhoto = () => {
    const length = currentImage.allImages.length - 1;
    const imageIndex = currentImage.index === 0 ? length : currentImage.index - 1;
    setCurrentImage({
      ...currentImage,
      active: currentImage.allImages[imageIndex].thumbnail_url,
      index: imageIndex,
    });
  };

  return (
    <div className="Image-Component">
      <i className="fas fa-arrow-left" onClick={() => {prevPhoto(); }} />
      <i className="fas fa-arrow-right" onClick={() => { nextPhoto(); }} />
      <img className="Main-Image" src={currentImage.active} alt="currentProduct" />
      {currentImage.allImages.map((image, index) => (
        <ImageThumbnails
          thumbnail={image.thumbnail_url}
          key={image.url.slice(28)}
          changeMainPhoto={() => { changeMainPhoto(image.thumbnail_url, index); }}
          currentActive={currentImage.active}
        />
      ))}
    </div>
  );
}

export default Image;
