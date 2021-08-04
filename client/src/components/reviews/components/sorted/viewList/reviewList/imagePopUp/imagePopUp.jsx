import React from 'react';
import './imagePopUp.css';

const imagePopUp = ({ handleClose, show, img }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="reviewThumbnail">
      <button className="reviewThumbnailCloseButton" type="button" onClick={handleClose}>Close</button>
        <section className="reviewThumbnail_modal">
          <img className="reviewThumbnailPop" src={img} alt="img" />
        </section>
      </div>
    </div>
  )

}

export default imagePopUp;