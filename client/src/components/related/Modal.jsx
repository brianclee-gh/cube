/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Modal({ combined, modalOpen }) {
  return (
    <div className={`related-modal ${modalOpen ? '' : 'hidden'}`}>
      <h3>Comparing...</h3>
      <table>
        <tbody>
          <tr>
            <th>Current</th>
            <th>{' '}</th>
            <th>Comparing</th>
          </tr>
          { combined ? Object.keys(combined).map((feature) => (
            <tr key={uuidv4()}>
              <th>{combined[feature][0]}</th>
              <th>{feature}</th>
              <th>{combined[feature][1]}</th>
            </tr>
          )) : (
            <tr>
              <th>Loading...</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Modal;
