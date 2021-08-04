/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import './Image.css';

function Image({ images }) {

  const defaultImage = "https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80&ar=0.75:1";

  const [currentImage, setCurrentImage] = useState({
    active: images[0].thumbnail_url || defaultImage,
    allImages: images,
    index: 0,
  });
  // Watches for images prop to change
  useEffect(() => {
    setCurrentImage({
      ...currentImage,
      allImages: images,
      // index: (prevIndex) => {prevIndex; },
      active: images[currentImage.index].thumbnail_url || "https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80&ar=0.75:1",
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
    if (highlight) {
      highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const prevPhoto = () => {
    const length = currentImage.allImages.length - 1;
    const imageIndex = currentImage.index === 0 ? length : currentImage.index - 1;
    setCurrentImage({
      ...currentImage,
      active: currentImage.allImages[imageIndex].thumbnail_url,
      index: imageIndex,
    });
    if (highlight) {
      highlight.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
  const [expanded, setExpanded] = useState(false);
  const expandMain = () => {
    setExpanded(!expanded);
  };

  const zoomPan = (event) => {
    const area = document.getElementsByClassName('expanded-main')[0];
    const photoZoom = document.getElementsByClassName('Main-Image-Expanded')[0];

    let clientX = event.clientX - area.offsetLeft;
    let clientY = event.clientY - area.offsetTop;

    const mWidth = area.offsetWidth;
    const mHeight = area.offsetHeight;

    clientX = (clientX / mWidth) * 100;
    clientY = (clientY / mHeight) * 100;

    photoZoom.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`;
  };

  const changeStyle = () => {
    const photoZoom = document.getElementsByClassName('Main-Image-Expanded')[0];
    photoZoom.style.transform = null;
  };
  // onMouseMove={expanded ? zoomPan : null}
  return (
    <>
      {/* {expanded ? (
        <div className="expanded-main">
          <i
            className={currentImage.index === 0
              ? 'fas fa-arrow-left left-arrow-hidden' : 'fas fa-arrow-left'}
            onClick={() => { prevPhoto(); }}
          />
          <img className="Main-Image-Expanded" src={currentImage.active} alt="currentProduct" onClick={() => {expandMain()}} />
          <i
            className={currentImage.index === currentImage.allImages.length - 1
              ? 'fas fa-arrow-right right-arrow-hidden' : 'fas fa-arrow-right'}
            onClick={() => { nextPhoto(); }}
          />
        </div>
      ) : ( */}
        <div className={expanded ? 'expanded-main' : 'Image-Component'}>
          <div className="Thumbnail-Arrow-Container">
            <i
              className={currentImage.index === 0 ? 'fas fa-angle-up top-arrow-hidden' : 'fas fa-angle-up'}
              onClick={() => { prevPhoto(); }}
            />
            <div className="Thumbnail-Container">
              {currentImage.allImages.map((image, index) => (
                <ImageThumbnails
                  thumbnail={image.thumbnail_url || defaultImage}
                  key={image.thumbnail_url + index || defaultImage}
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
            <i
              className={currentImage.index === 0
                ? 'fas fa-arrow-left left-arrow-hidden' : 'fas fa-arrow-left'}
              onClick={() => { prevPhoto(); }}
            />
            <img
              className={expanded ? "Main-Image-Expanded" : "Main-Image"}
              src={currentImage.active}
              alt="currentProduct"
              onClick={() => { expandMain(); }}
            />
            <i
              className={currentImage.index === currentImage.allImages.length - 1
                ? 'fas fa-arrow-right right-arrow-hidden' : 'fas fa-arrow-right'}
              onClick={() => { nextPhoto(); }}
            />
          </div>
        </div>
      {/* )} */}
    </>
  );
}

export default Image;
