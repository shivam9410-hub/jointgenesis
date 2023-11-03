import React from 'react'
import { Container } from 'react-bootstrap'
import Benefit from './Benefit'
import './Benefits.css'

const Benefits = () => {

    const benefitsarr=["The supplement has nutrients that help nourish the cartilage tissue for optimum joint health."


,"Joint Genesis provides an inflammatory response against harmful cytokines"
," Joint Genesis provides better mobility, flexibility, and joint comfort"
," It supports the production of hyaluronan, which is essential for lubricating the joints"
,
" The supplement helps fight free radicals and oxidative stress, which cause joint damage",
" The ingredients in Joint Genesis support bone density, thus preventing future chronic fractures",
" Joint Genesis can reduce the symptoms of osteoarthritis.",
" It helps joints move freely without rubbing against one another.",


]
  return (
    <Container className='benefits' >
       <h1 style={{textAlign:'center', fontWeight:'bold !important', marginBottom:'20px' }}>Benefits of Joint Genesis</h1>
        {
            benefitsarr.map((str)=>{
                 return <Benefit title={str}/>
            })
        }
    </Container>
  )
}

export default Benefits
