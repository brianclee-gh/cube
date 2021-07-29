/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function ImageThumbnails({ thumbnail, changeMainPhoto, currentActive }) {
  return (
    <span className={currentActive === thumbnail ? 'Thumbnail-Wrapper selectActive' : 'Thumbnail-Wrapper selectInactive'}>
      <img className="Thumbnail-Photo" src={thumbnail} alt="thumbnail" onClick={changeMainPhoto} />
    </span>
  );
}

export default ImageThumbnails;
