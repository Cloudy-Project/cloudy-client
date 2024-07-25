import React, { useEffect, useState } from 'react'
import '../css/CloudyGrid.css';
import Cloud from './Cloud';
import ScrollContainer from './ScrollContainter';

export default function CloudyGrid({memberId, letters}) {
  return (
    <ScrollContainer>
    <div className='cloudy-grid'>
      {letters.map(letter =>
        <Cloud letter={letter} key={letter.id} />
      )}
    </div>
    </ScrollContainer>
  )
}
