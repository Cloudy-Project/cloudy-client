import React, { useEffect, useState } from 'react'
import '../css/InputBox.css';
import getConsonant2 from '../utils/GetConsonant2';

export default function InputBox({onChange, content, name = ''}) {
  const [consonant, setConsonant] = useState();

  useEffect(() => {
    setConsonant(getConsonant2(name));
  }, [name])

  return (
    <div className='letter-box'>
      <textarea
        onChange={e => onChange(e.target.value)}
        className='content'
        value={content}
        placeholder={`${name + consonant}에게 하고 싶은 말을 적어요`}></textarea>
    </div>
  )
}
