import React from 'react'
import './Benefits'
import  checked from '../src/assets/checked.png'
const Benefit = ({title,about}) => {
  return (
    <div class='d-flex ' style={{alignItems:'center'}}>
   
   <div className='svgicon'>
<img src={checked} alt='checked'/>
   </div>
    <p> {title} </p>
    </div>
  )
}

export default Benefit
