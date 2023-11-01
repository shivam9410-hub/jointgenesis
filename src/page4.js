import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import  JointGenesis from './assets/joint genesis.png'
import "./About.css";
const About = () => {
  return (
    <Container fluid style={{ padding: "60px" }} className="aboutcontainer">
    
        <div className="aboutimage">
          <img alt="" src={JointGenesis}  className="jointimg"/>
        </div>
        <div className="aboutcontent">
          <p>
          Joint Genesis is a unique solution that aims to replenish the lost hyaluronan by using a combination of natural ingredients that have been proven to support joint health. Joint health is a vital aspect of overall well-being. As we age, our joints tend to wear down, leading to stiffness, inflammation, and pain. To combat these issues, many people turn to supplements and other remedies to support joint health.
          </p>
        </div>
    
    </Container>
  );
};

export default About;
