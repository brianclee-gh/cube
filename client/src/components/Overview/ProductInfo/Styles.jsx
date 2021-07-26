import React from 'react';

function Style({style, price}) {
  return (
    <>
      <img className="Style-Selection" src={style.photos[0].thumbnail_url} alt="" onClick={price}/>
    </>
  );
}

export default Style;
