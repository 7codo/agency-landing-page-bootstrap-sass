import React from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import {
  Container,
  Navbar,
  NavbarBrand,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
import Logo from "../assets/images/logo.svg";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <NavbarBrand href="/">
          <Image src={Logo} alt="logo" className="" height="40" />
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-nav" />
        <NavbarCollapse id="basic-nav" className="justify-content-end">
          <Nav>
            <NavLink active href="/">
              Home
            </NavLink>
            <NavLink href="#your-benefits">Your Benefits</NavLink>
            <NavLink href="#our-proccess">Our proccess</NavLink>
            <NavLink href="#start-working">Start Working</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
