import React, { useState } from 'react';
import './ViewList.css';

const fullBodyReviewList = ({half, test}) => {
  const [testUnit, setTest] = useState(true);

  const onceClicked = () => {
    setTest(false);
  };

  if (testUnit === true) {
    return (
      <div>
        {half}
        <button className="expendBodyButton" onClick={onceClicked}>show more</button>
      </div>
    )
  } else if (testUnit === false) {
    return (
      <div>
        {test}
      </div>
    )
  }

};

export default fullBodyReviewList;
