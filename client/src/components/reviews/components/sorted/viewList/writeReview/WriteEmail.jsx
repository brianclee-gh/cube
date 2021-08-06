import React, { useState, useEffect } from 'react';
import './WriteEmail.css';

const email = ({change}) => {
  const [emailUpdate, setemailUpdate] = useState("");

  const updateEmail = (e) => {
    setemailUpdate(e.target.value);

  };

  useEffect(() => {
    change(emailUpdate);
  }, [emailUpdate]);

  return (
    <div>
    <div className="writeReviewEmail">
      <label HtmlFor="writeReviewEmail_input" className="writeReviewEmail_label">
        Your email *:
        </label>
      <input type="email" name="writeEmail" onChange={updateEmail} placeholder="Example: jackson11@email.com" id="writeReviewEmail_input" maxLength="60" required />
    </div>
    <div className="writeReviewEmail_warning">
      For authentication reasons, you will not be emailed
    </div>
    </div>
  );
};

export default email;