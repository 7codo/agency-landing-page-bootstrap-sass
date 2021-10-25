import React from "react";
import { Container, Image, Card, Row, Col } from "react-bootstrap";
import AuditImg from "../assets/images/audit.svg";
import ResultImg from "../assets/images/result.svg";
import TrackingImg from "../assets/images/tracking.svg";

import ChartIcon from "../assets/icons/chart.png";
import DiscountIcon from "../assets/icons/discount.png";
import UsersIcon from "../assets/icons/users.png";

const cardsData = [
  {
    id: 1,
    source: ChartIcon,
    thumbnail: ResultImg,
    title: "Grow your business",
    description: `The magic wand for success is in figuring out
  how to bring in the profits and ensure the capacity needed to
  sustain that growth for posterity`,
  },
  {
    id: 2,
    source: DiscountIcon,
    thumbnail: TrackingImg,
    title: "Drive more sales",
    description: `A potential customer, once lost, is hard to retain back. But
      keeping some critical factors in mind, we
      can, for sure, use these loyalty programs as customer
      retention tools.`,
  },
  {
    id: 3,
    source: UsersIcon,
    thumbnail: AuditImg,
    title: "Handle by Expert",
    description: ` We know how we candevelop deep, trust-based relationships with
      our clients, and work together more collaboratively.`,
  },
];

function Process() {
  return (
    <section
      id="our-proccess"
      className="process-section text-light text-center"
    >
      <Container>
        <p className="lead text-capitalize">how it works</p>
        <h3 className="fs-1 mt-1 mb-2">Our Process</h3>
        <p>
          We know the best solution for all of your business ideas and we can
          help you <br /> solve all business problems
        </p>
        <div>
          {cardsData.map((cardData) => {
            const { id, source, title, description, thumbnail } = cardData;
            return (
              <Row
                key={id}
                className="process-tab text-dark mb-5 rounded-3 shadow-lg"
                style={{ backgroundColor: "#ffff" }}
              >
                <Col xs={12} sm={12} lg className="rounded-3">
                  <Image src={thumbnail} alt={title} fluid />
                </Col>
                <Col xs={12} sm={12} lg className="text-start">
                  <Card className="feature-card border-0 rounded-3">
                    <Card.Body>
                      <Image
                        className="mb-3 "
                        src={source}
                        width={55}
                        height={54}
                      />
                      <Card.Title className="fs-3 text-capitalize">
                        {title}
                      </Card.Title>
                      <Card.Text className="lead fs-6">{description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Process;
