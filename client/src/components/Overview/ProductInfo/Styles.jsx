import React from 'react';

function Style({style, current}) {
  return (
    <>
      <img className="Style-Selection" src={style.photos[0].thumbnail_url} alt="" onClick={current}/>
    </>
  );
}

export default Style;
