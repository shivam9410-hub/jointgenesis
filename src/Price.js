import React from 'react'
import { Container } from 'react-bootstrap'
import buy1 from './assets/buy1.png'
import buy2 from './assets/buy2.png'
import buy3 from './assets/buy3.png'
import './Price.css'
import  warn  from './assets/warning.webp'
const Price = () => {
  return (
    <Container className='pricepage'>
    <Container className='pricepagediv'>
      <div className='priceimg'><img src={buy1} alt=''/></div>
      <div className='priceimg2'><img src={buy2} alt=''/></div>
      <div className='priceimg'><img src={buy3} alt=''/></div>
    </Container>
    <img className='warn' src={warn} alt='/'/>
    </Container>
  )
}

export default Price
