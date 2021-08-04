/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

function ImageThumbnails({ thumbnail, changeMainPhoto, currentActive }) {
  return (
    <span className={currentActive === thumbnail ? 'Thumbnail-Wrapper selectActive' : 'Thumbnail-Wrapper selectInactive'}>
      <img className="Thumbnail-Photo" src={thumbnail} alt="thumbnail" onClick={changeMainPhoto} onKeyDown={() => {}} />
    </span>
  );
}

export default ImageThumbnails;
