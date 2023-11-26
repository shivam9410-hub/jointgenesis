import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../src/Home.css";
import  JointGenesis from './assets/joint genesis official.png' ;

const Home = () => {
  return (
    <Container  fluid className="Home">
      <div className="mainheading">
        <h1>
      Joint Genesis Only $49/Bottle - Limited Time Offer
        </h1>
        <div className="underline"></div>
      </div>

      <div className="homecontent">
        <div className="homeimgcontainer">
        <img src={JointGenesis} className="homeimg" alt=""/>
          
        </div>
        <div className="hometext" >
          <strong><h1> Joint Genesis | Official Store</h1>
          </strong><p>
            
Joint Genesis targets the aging-related loss of hyaluronan to address the underlying cause of age-related joint degeneration.
According to extensive studies, the degradation of joint health is significantly influenced by the drop in hyaluronan levels. For people who have tight, dehydrated joints, this novel method gives a fresh start and the chance to live life with vigor once again. 
Joint Genesis exclusive recipe is the first in the world to combine four scientifically supported nutrients for joints with Mobilee®, a cutting-edge and patented substance known for its exceptional capacity to double the number of hyaluronan molecules in synovial fluid by a factor of 10. 

            <br />
           
            <br />
            <br />
           <span className="regularprice"> 
            
             Regular Price:<span className="prevprice"> $179/per Bottle</span>
             </span>
            <br />
            
            <span>ONLY For:$49/per Bottle </span>
          </p>
          <button  className="homebtn">ORDER NOW 

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="m-2 bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
</button>{" "}
        </div>
      </div>
    </Container>
  );
};

export default Home;
