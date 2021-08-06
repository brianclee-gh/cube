import React, { useState, useEffect } from 'react';
import './Nickname.css';

const nickname = ({change}) => {
  const [nicknameUpdate, setNicknameUpdate] = useState("");

  const updateNickname = (e) => {
    setNicknameUpdate(e.target.value);
  };

  useEffect(() => {
    change(nicknameUpdate);
  }, [nicknameUpdate]);

  return (
    <div>
    <div className="writeReviewNickName">
      <label HtmlFor="writeReviewNickName_input" className="writeReviewNickName_label">
      What is your nickname *:
      </label>
      <input type="text" name="writeNickname" onChange={updateNickname} placeholder="Example: jackson11!" maxLength="60" id="writeReviewNickName_input" required />
    </div>
    <div className="writeReviewNickName_warning">
      For privacy reasons, do not use your full name or email address
    </div>
    </div>
  );
};

export default nickname;