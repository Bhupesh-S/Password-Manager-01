import React, { useState } from 'react';

const PasswordItem = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <li className="password-item">
      <div className="password-details">
        <strong>{item.website}</strong>
        <div className="credentials">
          <span>
            Username: {item.username}
            <i
              className="copy-icon"
              title="Copy Username"
              onClick={() => handleCopy(item.username)}
            >📋</i>
          </span>
          <span>
            Password: {show ? item.password : '•••••••'}
            <i
              className="eye-icon"
              title={show ? 'Hide Password' : 'Show Password'}
              onClick={() => setShow(!show)}
            >
              {show ? '🙈' : '👁️'}
            </i>
            <i
              className="copy-icon"
              title="Copy Password"
              onClick={() => handleCopy(item.password)}
            >📋</i>
          </span>
        </div>
      </div>
    </li>
  );
};

export default PasswordItem;
