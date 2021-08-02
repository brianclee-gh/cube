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
        Review Summary:
      <input type="text" name="reviewSummary" onChange={updateSummary} maxLength="60" defaultValue="Example: Best purchase ever!"/>
      </label>
    </div>
  );
};

export default reviewSummary;