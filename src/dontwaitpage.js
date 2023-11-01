import React from 'react'
import { Container } from 'react-bootstrap'
import  jointgenesis from "./assets/joint genesis official website.png" ;
import './dontwait.css'
const Dontwaitpage = () => {
  return (
     <Container fluid className='dontwait'>
  <div className='dontwaitcontent'>
<h3>Don't Wait Any Longer! Order Your <br></br> Discounted Bottle Now!</h3>
    <span>Regular Price:$179</span>
    <h3>ONLY FOR:$49/PER BOTTLE</h3>

    <button className='dontwaitbtn'>GET YOU DISCOUNT NOW</button>
  </div>
  <div className='dontwaitimg'><img src={jointgenesis} alt=''/></div>
     </Container>
  )
}

export default Dontwaitpage
