/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

function Style({ style, current, isActive }) {
  return (
    <>
      <div className="Style-Wrapper">
        <img
          className="Style-Selection"
          src={style.photos[0].thumbnail_url || 'https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80&ar=0.75:1'}
          alt=""
          onClick={current}
          onKeyUp={() => {}}
        />
        {isActive === style ? <div className="checkmark-active far fa-check-circle" /> : null}
      </div>
    </>
  );
}

export default Style;
