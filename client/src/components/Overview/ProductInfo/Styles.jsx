/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function Style({ style, current, isActive, changeActive }) {
  return (
    <>
      <div className="Style-Wrapper" onClick={changeActive}>
        <img
          className="Style-Selection"
          src={style.photos[0].thumbnail_url || 'https://source.unsplash.com/random/600x800'}
          alt=""
          onClick={current}
        />
        {isActive === style ? <div className="checkmark-active far fa-check-circle" /> : null}
      </div>
    </>
  );
}

export default Style;
