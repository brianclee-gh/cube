import React, { useState, useEffect } from 'react';

const reviewBody = ({change}) => {
  const [bodyUpdate, setbodyUpdate] = useState("");

  const updateBody = (e) => {
    setbodyUpdate(e.target.value);
  };

  useEffect(() => {
    change(bodyUpdate);
  }, [bodyUpdate]);

  return (
    <div>
      <label>
        Review Body:
      <input type="text" name="reviewBody" onChange={updateBody} minLength="50" maxLength="1000" defaultValue="Why did you like the product or not?"/>
      </label>
    </div>
  );
};

export default reviewBody;