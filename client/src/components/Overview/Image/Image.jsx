/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import './Image.css';

function Image({ images }) {
  const [currentImage, setCurrentImage] = useState({
    active: images[0].thumbnail_url,
    allImages: images,
    index: 0,
  });
  // Watches for images prop to change
  useEffect(() => {
    setCurrentImage({
      ...currentImage,
      allImages: images,
      // index: (prevIndex) => {prevIndex; },
      active: images[currentImage.index].thumbnail_url,
    });
  }, [images]);

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
      <div className="Thumbnail-Container">
        <i
          className={currentImage.index === 0 ? 'fas fa-angle-up top-arrow-hidden' : 'fas fa-angle-up'}
          onClick={() => { prevPhoto(); }}
        />

        {currentImage.allImages.map((image, index) => (
          <ImageThumbnails
            thumbnail={image.thumbnail_url}
            key={image.url.slice(28)}
            changeMainPhoto={() => { changeMainPhoto(image.thumbnail_url, index); }}
            currentActive={currentImage.active}
          />
        ))}
        <i
          className={currentImage.index === currentImage.allImages.length - 1
            ? 'fas fa-angle-down bottom-arrow-hidden' : 'fas fa-angle-down'}
          onClick={() => { nextPhoto(); }}
        />
      </div>
      <div className="Main-Image-Container">
        <i className="fas fa-arrow-left" />
        <img className="Main-Image" src={currentImage.active} alt="currentProduct" />
        <i className="fas fa-arrow-right" />
      </div>
    </div>
  );
}

export default Image;
