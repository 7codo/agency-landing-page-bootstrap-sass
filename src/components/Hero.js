import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import HeroBack from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="text-light text-center pb-1">
      <Container>
        <h1>A Digital Product Design Agency</h1>
        <h4 className="mb-4 mt-3 lead fs-5">
          We are Creative and Professional Digital Agency.
        </h4>
        <Button variant="light" size="lg" className="rounded-pill ">
          Get Started
        </Button>
        <Image className="" src={HeroBack} fluid />
      </Container>
    </section>
  );
}

export default Hero;
