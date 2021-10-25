import React from "react";
import { Container, Image, Row, Col, Nav, NavLink } from "react-bootstrap";
import Logo from "../assets/images/logo.svg";
import fbIcon from "../assets/icons/Twitter.svg";
import twitterIcon from "../assets/icons/Facebook.svg";
import instaIcon from "../assets/icons/Instagram.svg";

function Footer() {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            lg
            className="d-flex justify-content-center justify-content-lg-start"
          >
            <Image src={Logo} alt="logo" className="" height="40" />
          </Col>
          <Col xs={12} sm={12} lg={7} className="d-flex justify-content-center">
            <Nav className="footer-nav">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#your-benefits">Your Benefits</NavLink>
              <NavLink href="#our-proccess">Our proccess</NavLink>
              <NavLink href="#start-working">Start Working</NavLink>
              <NavLink href="#our-works">Our Works</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </Nav>
          </Col>
          <Col className="d-flex justify-content-center justify-content-lg-end">
            <Nav>
              <NavLink href="#facebook">
                <Image src={fbIcon} alt="facebook icon" />
              </NavLink>
              <NavLink href="#twitter">
                <Image src={twitterIcon} alt="twitter icon" />
              </NavLink>
              <NavLink href="#instagram">
                <Image src={instaIcon} alt="instagram icon" />
              </NavLink>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            xs={12}
            sm={12}
            lg
            className="d-flex justify-content-center justify-content-lg-start"
          >
            <p className="text-light">© 2021 Company</p>
          </Col>
          <Col
            xs={12}
            sm={12}
            lg
            className="d-flex justify-content-center justify-content-lg-end"
          >
            <Nav className="social-nav">
              <NavLink href="#privacy-policy">Privacy policy</NavLink>
              <NavLink href="#term-of-service">Term of service</NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
