import React, { useState } from 'react'
import FaqCard from './Faq'
import './faqlist.css'
import { Container } from 'react-bootstrap'

const Faqlist = () => {
  const [Faq, setFaq] = useState([{ showAnswerDiv:false,key:1,  question:"Is Join Genesis Safe?" , answer:"Joint Genesis contains 100% natural and safe ingredients. It is therefor completely safe, effective, and natural. Joint Genesis is used daily by thousands of people. There have been no reported side effects. Joint Genesis are made in the USA at our FDA-approved, GMP-certified facility. We adhere to the highest standards. It is 100% natural, vegetarian, and non-GMO. Before using,consult your doctor if you have any medical conditions." },
  {showAnswerDiv:false,key:2,question:"How Many Bottles Should I Order?" , answer:"Joint Genesis is best used for at least 3 to 6 months to achieve the best results. This will ensure you reach your goals. Joint Genesis can be purchased monthly, but we recommend you buy 3 to 6 bottle of Joint Genesis as we offer discounts and that's the minimum amount you need to see results. You should note that this discount is not available year-round. So take advantage of it while you can." },
  {showAnswerDiv:false,key:3,question:"How Will Joint Genesis Be Shipped To Me And How Quickly?" , answer:"You can expect your order to be shipped within 5-7 business day if you live in the United States of America or Canada. Orders from outside the USA or Canada typically take between 8-15 business days (+ customs clearance). We will deliver your order to your office or home using a premium carrier like FedEx or UPS."},
  {showAnswerDiv:false,key:4, question:"Is Joint Genesis Approved By The FDA?" , answer:"Joint Genesis is manufactured in the USA by our FDA-approved, GMP-certified facility. We adhere to the highest standards." },
  {showAnswerDiv:false,key:5, question:"Where to buy Cortexi?" , answer:"Joint Genesis can be purchased from its official website. It is essential to ensure that you buy the supplement from a reputable retailer to ensure that you receive a genuine product." }
]) ;


  
const togglediv=(key)=>{

setFaq((prevFaqs)=>prevFaqs.map((faq)=>{
   if(faq.key===key){
    return {...faq,showAnswerDiv:!faq.showAnswerDiv} ;
   }
   else {
    return {...faq , showAnswerDiv:false} ;
   }

}))
 
}  
  return (
    <Container  style={{padding:'40px'}} fluid className='faqlist' >
          {
          Faq.map((obj)=>{
            return <FaqCard  question={obj.question} answer={obj.answer}   showAnswerDiv={obj.showAnswerDiv}  togglediv={togglediv} id={obj.key}/>
          })
          }        
   </Container>
  )
}

export default Faqlist
