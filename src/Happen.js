import React from 'react'
import { Container } from 'react-bootstrap'
import './happen.css'
import    jointgenesisbuy from './assets/joint genesis order.png';
const Happen = () => {
  return (
    <Container  className='happen'   
    >

<h1>"What Happens After I Click Joint Genesis "Buy Now" Button? "</h1>
<p>Once you have clicked the “Buy Now” button that is right below this text, you will be taken to the secure checkout page. Just enter your information, and you will then be given instant access to the entire </p>
 
   <div className='happencontent'> 
    <div className='happenimg'><img alt='' src={jointgenesisbuy}/></div>

   <div className='happentext'>
    
   <h3>How Safe is My Credit Card Information on Your Web site?</h3>
   <p>Your online privacy is one thing you can be sure we so much prioritize here and thus do not worry about losing any sensitive credentials while making your purchase </p>
    <h3>Remarks:</h3>

 <p><strong>Joint Genesis  </strong> 60-Day Money Back Guarantee 
 </p>
   </div>

   </div>
 
    </Container>
  )
}

export default Happen
