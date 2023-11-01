import React from "react";
import "../src/Globalheading.css";
import { Container, Row } from "react-bootstrap";

const Globalheading = (props) => {
  return (
    <Container fluid className="heading">
      <h1>{props.title}</h1>
    </Container>
  );
};

export default Globalheading;
