import React from 'react';

function Modal({ currentProduct, comparingProduct, modalOpen }) {
  return (
    <div className={`related-modal ${modalOpen ? '' : 'hidden'}`}>
      <h3>Comparing...</h3>
      <table>
        <tbody>
          <tr>
            <th>Current</th>
            <th>asdf</th>
            <th>Comparing</th>
          </tr>
          <tr>
            <th>CurrentVal</th>
            <th>Quality</th>
            <th>ComparingVal</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Modal;
