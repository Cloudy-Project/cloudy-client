import React, { useEffect, useState } from 'react';
import '../css/HeaderContainer.css';
import getConsonant from '../utils/GetConsonant';

export default function HeaderContainer({ name = '' }) {
  const [consonant, setConsonant] = useState();

  useEffect(() => {
    setConsonant(getConsonant(name));
  })

  return (
    <div className='header-container'>
      <label className='user-text'>{name}{consonant} 편지함</label>
    </div>
  );
}
