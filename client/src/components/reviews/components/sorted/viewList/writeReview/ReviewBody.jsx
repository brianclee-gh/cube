import React, { useState, useEffect } from 'react';
import './ReviewBody.css';

const reviewBody = ({change}) => {
  const [bodyUpdate, setbodyUpdate] = useState("");
  const [minimumCount, setMinimumCount] = useState(0);

  const updateBody = (e) => {
    setbodyUpdate(e.target.value);
    setMinimumCount(e.target.value.length);
  };

  useEffect(() => {
    change(bodyUpdate);
  }, [bodyUpdate]);

  return (
    <div>
      <label>
        Review Body *:
      <input type="text" name="reviewBody" onChange={updateBody} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" required />
      </label>
      {minimumCount <= 50 ? <div>Minimum required characters left: {minimumCount}</div> : <div>Minimum reached</div>}
    </div>
  );
};

export default reviewBody;