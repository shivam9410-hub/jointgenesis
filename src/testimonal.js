import React from 'react'
import './testimonal.css'
const TestimonalCard = ({name, verified, description,imgsrc}) => {
  return (
    <div className='testicard'>
      <img alt='' src={imgsrc} className='image'/>
      <div className='details'>
        <h4>{name}</h4>
        <h5>{verified}</h5>
        <p className='desc'>{description}</p>
      </div>
    </div>
  )
}

export default TestimonalCard;
