import React from "react";
import Card from "./card";
import { Container } from "react-bootstrap";
import   naturalimage from './assets/natural.png'
import    madeinusa from './assets/madeinusa.png'
import   gmpcertified from './assets/gmp.png'
import   fdaapproved from './assets/fda.png'
import "./secondpage.css";
const SecondPage = () => {

  const Arr = [
    {
      title: "Made In USA",
      img:   madeinusa,
      description: "BioDynamix is manufactured in a US-based facility.",
    },
    {
      title: "100% Natural",
      img: naturalimage,
      description: "In BioDynamix all ingredients are pure, natural, and carefully sourced.",
    },
    {
      title: "GMP Certified",
      img: gmpcertified,
      description: "BioDynamix is GMP certified ensuring pharmaceutical grade quality.",
    },
    {
      title: "FDA Approved",
      img: fdaapproved,
      description: "BioDynamix is manufactured according to the latest standards",
    },
  ];
  return (
    <Container fluid className="cardcontainer" >


   
      {Arr.map((obj) => {
        return (
          <Card title={obj.title} src={obj.img} description={obj.description} />
        );
      })}
    </Container>
  );
};

export default SecondPage;
