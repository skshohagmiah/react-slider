/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Bots = ({data,handleDot,index}) => {
  return (
    <div className='dots'>
      {data.map((item,id) => 
      <span className={`dot ${index === id && 'active'}`} onClick={() => handleDot(id)} key={Math.random()}></span>
      )}
    </div>
  )
}

export default Bots