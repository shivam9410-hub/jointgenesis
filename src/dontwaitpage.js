import React from 'react'
import { Container } from 'react-bootstrap'
import  jointgenesis from "./assets/joint genesis official website.png" ;
import './dontwait.css'
const Dontwaitpage = () => {
  return (
     <Container fluid className='dontwait'>
  <div className='dontwaitcontent'>
<h3>Don't Wait Any Longer! Order Your <br></br> Discounted Bottle Now!</h3>
<span className='regular'>
   Regular Price: <span className='prevprice'>$179/per bottle</span>
   </span>
    <h3>ONLY FOR:$49/per bottle</h3>

    <button className='dontwaitbtn'> <strong>
    GET YOUR DISCOUNT NOW
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="m-2 bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
      </strong>
      
      
     </button>
  </div>
  <div className='dontwaitimg'><img src={jointgenesis} alt=''/></div>
     </Container>
  )
}

export default Dontwaitpage
