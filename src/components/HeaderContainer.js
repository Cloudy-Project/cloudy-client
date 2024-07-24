import React from 'react';
import '../css/HeaderContainer.css';

export default function HeaderContainer({ username = ' ' }) {
  const getConsonant = (name) => {
    const lastChar = name.charCodeAt(name.length - 1);

    if (lastChar >= 0xAC00 && lastChar <= 0xD7A3) {
      const consonantCode = (lastChar - 44032) % 28;
      return consonantCode === 0 ? '의' : '이의';
    }
    return '의';
  };

  const consonant = getConsonant(username);

  return (
    <div className='header-container'>
      <label className='user-text'>{username}{consonant} 편지함</label>
    </div>
  );
}