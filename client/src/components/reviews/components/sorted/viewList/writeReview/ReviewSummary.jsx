import React, { useState, useEffect } from 'react';
import './ReviewSummary.css';

const reviewSummary = ({change}) => {
  const [summaryUpdate, setSummaryUpdate] = useState("");

  const updateSummary = (e) => {
    setSummaryUpdate(e.target.value);
  };

  useEffect(() => {
    change(summaryUpdate);
  }, [summaryUpdate]);

  return (
    <div className="writeReviewSummary">
      <label className="writeReviewSummaryLabel" htmlFor="writeReviewSummaryInput">
        Review Summary *:
      </label>
      <input type="text" id="writeReviewSummaryInput" name="reviewSummary" onChange={updateSummary} maxLength="60" placeholder="Example: Best purchase ever!" required />

    </div>
  );
};

export default reviewSummary;