import React from 'react'
import { Container } from 'react-bootstrap'
import './Guarantee.css'
import doctorjointgenesis from './assets/gurantee.webp'
const GuranteePage = () => {
  return (
   <Container fluid className='guarantee'>
    <h1>BioDynamix-100% Satisfaction Guaranteed</h1>
  <div className='content'>
    <div  className='guaranteeimg'><img alt='' src={doctorjointgenesis}/></div>
    <div className='contenttext'>

    <h5>We are so confident in the God given power of this product, that we offer a 100% money back, 60 Day guarantee. In other words, if for whatever reason at all, you don't fall in love with EndoPeak, just call us up toll free, and ask for you money back. We will honor it.</h5>
    <br/>
    <h3>Get your BioDynamix supplment and see for yourself</h3>
   <button >Get Discount Now

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus m-2" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> 
    </button> 
    </div>
  </div>
   </Container>
  )
}

export default GuranteePage
