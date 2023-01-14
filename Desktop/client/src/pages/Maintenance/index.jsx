import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../assets/img/logo/loginRoadmap.svg";
const Maintenance = () => (
  <Container className="text-center justify-content-sm-center align-middle">
    <Row>
      <Col>
        <Image src={Logo} width={"70%"} />
      </Col>
    </Row>
    <Row>
      <Col>
        <h1>We are working for you!</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>We will be here soon!</h3>
      </Col>
    </Row>
  </Container>
);

export default Maintenance;
