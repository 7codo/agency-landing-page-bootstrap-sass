import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import ChartIcon from "../assets/icons/chart.png";
import DiscountIcon from "../assets/icons/discount.png";
import UsersIcon from "../assets/icons/users.png";
import SearchIcon from "../assets/icons/search.png";
import GraphIcon from "../assets/icons/graph.png";
import BagIcon from "../assets/icons/bag.png";

const cardsData = [
  {
    id: 1,
    source: ChartIcon,
    title: "Grow your business",
    description: `The magic wand for success is in figuring out
how to bring in the profits and ensure the capacity needed to
sustain that growth for posterity`,
  },
  {
    id: 2,
    source: DiscountIcon,
    title: "Drive more sales",
    description: `A potential customer, once lost, is hard to retain back. But
    keeping some critical factors in mind, we
    can, for sure, use these loyalty programs as customer
    retention tools.`,
  },
  {
    id: 3,
    source: UsersIcon,
    title: "Handle by Expert",
    description: ` We know how we candevelop deep, trust-based relationships with
    our clients, and work together more collaboratively.`,
  },
  {
    id: 4,
    source: SearchIcon,
    title: "UX Research",
    description: `  UX research is the systematic study of target users and their
    requirements, to add realistic contexts and insights to design
    processes.`,
  },
  {
    id: 5,
    source: GraphIcon,
    title: "Business Audit",
    description: `An audit examines your business's financial records to verify
    they are accurate. This is done through a systematic review of
    your transactions.`,
  },
  {
    id: 6,
    source: BagIcon,
    title: "Data tracking",
    description: ` The hardware and software, which when used together allows you
    to know where something is at any point in time`,
  },
];

function Features() {
  return (
    <section id="your-benefits" className="pt-lg-1">
      <Container>
        <p className="lead text-primary">Features</p>
        <h3 className="fs-1 mt-2 mb-5">
          We are here to help <br />
          you with
        </h3>
        <Row style={{ rowGap: "2rem" }}>
          {cardsData.map((cardData) => {
            const { id, source, title, description } = cardData;
            return (
              <Col xs={12} md={6} lg={4} key={id}>
                <Card className="feature-card shadow-lg rounded-3">
                  <Card.Body>
                    <Image
                      className="mb-3"
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
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
