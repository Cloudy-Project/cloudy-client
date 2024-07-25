import React, { useEffect, useState } from 'react'
import '../css/CloudyGrid.css';
import Cloud from './Cloud';

export default function CloudyGrid({memberId}) {
  const [letters, setLetters] = useState([]);

  const fetchLetters = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_API_URL + `/letter/member/${memberId}`);
    if(res.ok) {
      const result = await res.json();
      setLetters(result);
    }
  }

  useEffect(() => {
    fetchLetters();
  }, []);

  return (
    <>
      {letters.length == 0
        ? (
          <div className='null-container'>
            <div className='null-content'>
              <p>
                아직 도착한 편지가 없네요!
              </p>
              <p>
                햇님을 눌러 채원이에게 첫 번째 편지를 보내봐요
              </p>
            </div>
          </div>
        )
        : (
            <div className='cloudy-grid'>
              {letters.map(letter =>
                <Cloud letter={letter} key={letter.id} />
              )}
            </div>
          )
      }
    </>
  )
}
