import React from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import WorkBg from "../assets/images/work.png";

function Work() {
  return (
    <section id="start-working" className="work-section">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            lg
            className="d-flex align-items-center justify-content-center"
          >
            <div className="left-copy w-75 text-light">
              <p className="lead text-capitalize">start with us</p>
              <h3 className="fs-1 mt-1 mb-2">Start working faster today</h3>
              <p>
                We know the best solution for all of your
                <br />
                business ideas and we can help you
                <br />
                solve all business problems
              </p>
              <Button
                variant="light"
                size="lg"
                className="rounded-pill lead text-primary"
              >
                Get Started
              </Button>
            </div>
          </Col>
          <Col>
            <Image src={WorkBg} alt="Sart Working" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;
