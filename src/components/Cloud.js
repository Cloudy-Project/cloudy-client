import React, { useEffect, useState } from 'react'
import '../css/CloudyGrid.css';

export default function Cloud({letter}) {
  const [cloudDisplay, setCloudDisplay] = useState('block');
  const [cloudClearDisplay, setCloudClearDisplay] = useState('none');
  const [writerName, setWriterName] = useState('');

  useEffect(() => {
    if(letter.writer.length > 3) {
      setWriterName(letter.writer.substr(0, 3));
    } else {
      setWriterName(letter.writer);
    }
  }, []);

  return (
    <div
      className='cloud'
      key={letter.id}
      onMouseEnter={() => {
        setCloudDisplay('none');
        setCloudClearDisplay('block');
      }}
      onMouseLeave={() => {
        setCloudDisplay('block');
        setCloudClearDisplay('none');
      }}>
      <img
        style={{
          display: `${cloudDisplay}`
        }}
        className='cloud-img'
        src={require('../assets/img/cloudy.png')}
        alt='' />
      <img
        style={{
          display: `${cloudClearDisplay}`
        }}
        className='hover-cloud-img'
        src={require('../assets/img/cloudy-clear.png')}
        alt='' />
      <p
        style={{
          display: `${cloudClearDisplay}`
        }}
        className='hover-cloud-writer'>
        {writerName}
      </p>
    </div>
  )
}
