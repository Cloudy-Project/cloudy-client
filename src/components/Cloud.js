import React, { useEffect, useState } from 'react'
import '../css/CloudyGrid.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Cloud({letter}) {
  const [cloudDisplay, setCloudDisplay] = useState('block');
  const [cloudClearDisplay, setCloudClearDisplay] = useState('none');
  const [writerName, setWriterName] = useState('');

  const location = useLocation();
  const {memberId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(letter.writer.length > 3) {
      setWriterName(letter.writer.substr(0, 3));
    } else {
      setWriterName(letter.writer);
    }
  }, []);

  const onClickCloud = () => {
    const paths = location.pathname.split('/');
    if(paths.length > 0 && paths[1] === 'cloudy') {
      navigate(`/${paths[1]}/detail/${letter.id}`, { state: { letter: letter, memberId: memberId } });
    } else {
      navigate(`/detail/${letter.id}`, { state: { letter: letter, memberId: memberId } });
    }
  }

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
      }}
      onClick={onClickCloud}>
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
