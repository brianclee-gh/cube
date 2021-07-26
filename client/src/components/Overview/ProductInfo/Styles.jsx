import React from 'react';

function Style({style}) {
  return (
    <>
      <img className="Style-Selection" src={style.photos[0].thumbnail_url} alt="" />
    </>
  );
}

export default Style;
