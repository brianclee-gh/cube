import React, { useState, useEffect } from 'react';

const reviewSummary = ({change}) => {
  const [summaryUpdate, setSummaryUpdate] = useState("");

  const updateSummary = (e) => {
    setSummaryUpdate(e.target.value);
  };

  useEffect(() => {
    change(summaryUpdate);
  }, [summaryUpdate]);

  return (
    <div>
      <label>
        Review Summary *:
      <input type="text" name="reviewSummary" onChange={updateSummary} maxLength="60" placeholder="Example: Best purchase ever!" required />
      </label>
    </div>
  );
};

export default reviewSummary;