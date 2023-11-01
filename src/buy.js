import React from 'react'
import { Container } from 'react-bootstrap'
import buy1 from './assets/buy1.png'
import buy2 from './assets/buy2.png'
import buy3 from './assets/buy3.png'

const buy = () => {
  return (
    <Container fluid>

     <a href='/'>   <img src={buy1} alt=''/></a>
     <a href='/'>  <img src={buy2} alt=''/></a>
     <a href='/'>  <img src={buy3} alt=''/></a>
    </Container>
  )
}

export default buy
