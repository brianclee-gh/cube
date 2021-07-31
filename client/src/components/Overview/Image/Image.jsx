/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import './Image.css';

function Image({ images }) {
  const [currentImage, setCurrentImage] = useState({
    active: images[0].thumbnail_url || 'https://source.unsplash.com/random/600x800',
    allImages: images,
    index: 0,
  });
  // Watches for images prop to change
  useEffect(() => {
    setCurrentImage({
      ...currentImage,
      allImages: images,
      // index: (prevIndex) => {prevIndex; },
      active: images[currentImage.index].thumbnail_url || 'https://source.unsplash.com/random/600x800',
    });
  }, [images]);

  const changeMainPhoto = (image, photoIndex) => {
    setCurrentImage({ ...currentImage, active: image, index: photoIndex });
  };

  const highlight = document.getElementsByClassName('selectActive')[0];
  const nextPhoto = () => {
    const length = currentImage.allImages.length - 1;
    const imageIndex = currentImage.index === length ? 0 : currentImage.index + 1;
    setCurrentImage({
      ...currentImage,
      active: currentImage.allImages[imageIndex].thumbnail_url,
      index: imageIndex,
    });
    highlight.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const prevPhoto = () => {
    const length = currentImage.allImages.length - 1;
    const imageIndex = currentImage.index === 0 ? length : currentImage.index - 1;
    setCurrentImage({
      ...currentImage,
      active: currentImage.allImages[imageIndex].thumbnail_url,
      index: imageIndex,
    });
    highlight.scrollIntoView({ behavior: "smooth", block: "end"});
  };

  return (
    <div className="Image-Component">
      <div className="Thumbnail-Arrow-Container">
        <i
          className={currentImage.index === 0 ? 'fas fa-angle-up top-arrow-hidden' : 'fas fa-angle-up'}
          onClick={() => { prevPhoto(); }}
        />
        <div className="Thumbnail-Container">
          {currentImage.allImages.map((image, index) => (
            <ImageThumbnails
              thumbnail={image.thumbnail_url || 'https://source.unsplash.com/random/600x800'}
              key={image.thumbnail_url || 'https://source.unsplash.com/random/600x800'}
              changeMainPhoto={() => { changeMainPhoto(image.thumbnail_url, index); }}
              currentActive={currentImage.active}
            />
          ))}
        </div>
        <i
          className={currentImage.index === currentImage.allImages.length - 1
            ? 'fas fa-angle-down bottom-arrow-hidden' : 'fas fa-angle-down'}
          onClick={() => { nextPhoto(); }}
        />
      </div>
      <div className="Main-Image-Container">
        <i className="fas fa-arrow-left" onClick={() => { prevPhoto(); }} />
        <img className="Main-Image" src={currentImage.active} alt="currentProduct" />
        <i className="fas fa-arrow-right" onClick={() => { nextPhoto(); }} />
      </div>
    </div>
  );
}

export default Image;
