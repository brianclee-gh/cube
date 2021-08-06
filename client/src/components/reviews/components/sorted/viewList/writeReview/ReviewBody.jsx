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
    <div className="writeReviewBody">
      <label className="writeReviewBody_label" htmlFor="writeReviewBody_input">
        Review Body *:
      </label>
      <textarea type="text" name="reviewBody" id="writeReviewBody_input" onChange={updateBody} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" required />
    </div>
    {minimumCount <= 50 ? <div className="writeReviewBody_count">Minimum required characters left: {minimumCount}</div> : <div>Minimum reached</div>}
    </div>
  );
};

export default reviewBody;