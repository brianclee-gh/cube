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
      <label>
      What is your nickname *:
      <input type="text" name="writeNickname" onChange={updateNickname} placeholder="Example: jackson11!" maxLength="60" required />
      </label>
      <div>
        For privacy reasons, do not use your full name or email address
      </div>
    </div>
  );
};

export default nickname;