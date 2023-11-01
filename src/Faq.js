import React  from 'react'
import './faq.css'
const FaqCard = (props) => {
  console.log(props);
  return (
    <div className='faqcard'  onClick={()=>props.togglediv(props.id)}>
      <div  className='ques' >   <h4>{props.question} </h4> 
      
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
         </div>
    {props.showAnswerDiv&&  <div className={`ans-div ${props.showAnswerDiv? 'expanded' : ''}`} >{props.answer}</div>}
    </div>
  )
}

export default FaqCard
