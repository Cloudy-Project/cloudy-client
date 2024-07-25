import React, { useEffect, useState } from 'react'
import '../css/CloudyGrid.css';
import Cloud from './Cloud';

export default function CloudyGrid({memberId, letters}) {
  return (
    <div className='cloudy-grid'>
      {letters.map(letter =>
        <Cloud letter={letter} key={letter.id} />
      )}
    </div>
  )
}
