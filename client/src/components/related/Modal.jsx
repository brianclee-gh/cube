/* eslint-disable react/prop-types */
import React from 'react';

function Modal({
  combined, modalOpen, closeModal, reportClick,
}) {
  return (
    <div
      tabIndex="-4"
      role="button"
      onClick={(e) => {
        reportClick(e, 'Modal');
        if (e.target.classList.contains('related-modal')) { closeModal(); }
      }}
      onKeyDown={() => {}}
      className={`related-modal ${modalOpen ? '' : 'hidden'}`}
    >
      <div className="related-modal-container">
        <h3 className="modal-comparing-heading">COMPARING</h3>
        <table className="modal-table">
          <tbody>
            <tr>
              <th><span className="modal-heading">{combined ? combined.names.current : 'Current'}</span></th>
              <th>{' '}</th>
              <th><span className="modal-heading">{combined ? combined.names.comparing : 'Comparing'}</span></th>
            </tr>
            { combined ? Object.keys(combined).map((feature) => {
              if (feature !== 'names') {
                return (
                  <tr key={feature}>
                    <th className="skinny-text">{combined[feature][0]}</th>
                    <th>{feature}</th>
                    <th className="skinny-text">{combined[feature][1]}</th>
                  </tr>
                );
              }
            }) : (
              <tr>
                <th>Loading...</th>
              </tr>
            )}
          </tbody>
        </table>
        <div className="close-btn-container">
          <button onClick={closeModal} className="close-related-modal-btn" type="button">CLOSE</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
