import React from 'react'
import './Cards.css'
function Cards({head3,para}) {
  return (
    <div className='cards'>
        <h3>{head3}</h3>
        <p>{para}</p>
    </div>
  )
}

export default Cards