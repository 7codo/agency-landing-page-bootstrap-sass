import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

import QantasIcon from "../assets/icons/rec1.png";
import TalentBinIcon from "../assets/icons/rec2.png";
import MazdaIcon from "../assets/icons/rec3.png";
import NitroIcon from "../assets/icons/rec4.png";
import SmashingIcon from "../assets/icons/rec5.png";
import POPSugarIcon from "../assets/icons/rec6.png";
import AtlassianIcon from "../assets/icons/rec7.png";
import CSSManiaIcon from "../assets/icons/rec8.png";
import BuySellAdsIcon from "../assets/icons/rec9.png";
import CIVICRMIcon from "../assets/icons/rec10.png";

const brandsIcon = [
  {
    id: 1,
    alt: "Qantas",
    source: QantasIcon,
  },

  {
    id: 2,
    alt: "TalentBin",
    source: TalentBinIcon,
  },
  {
    id: 3,
    alt: "Mazda",
    source: MazdaIcon,
  },
  {
    id: 4,
    alt: "Nitro",
    source: NitroIcon,
  },
  {
    id: 5,
    alt: "Smashing",
    source: SmashingIcon,
  },
  {
    id: 6,
    alt: "POPSugar",
    source: POPSugarIcon,
  },
  {
    id: 7,
    alt: "Atlassian",
    source: AtlassianIcon,
  },
  {
    id: 8,
    alt: "CSSMania",
    source: CSSManiaIcon,
  },
  {
    id: 9,
    alt: "BuySellAds",
    source: BuySellAdsIcon,
  },
  {
    id: 10,
    alt: "CIVICRM",
    source: CIVICRMIcon,
  },
];

function Brands() {
  return (
    <section className="brands-section text-center">
      <Container>
        <p className="lead text-capitalize">brands</p>
        <h3 className="fs-1 mt-1 mb-2 lh-sm">
          We work with thousands of the world’s
          <br />
          leading brands
        </h3>
        <Row className="w-75 mx-auto mt-5">
          {brandsIcon.map((brandIcon) => {
            const { id, alt, source } = brandIcon;
            return (
              <Col xs={12} sm={6} md key={id}>
                <div class="h-100 d-flex align-items-center justify-content-center">
                  <Image src={source} alt={alt} />
                </div>
              </Col>
            );
          })}
        </Row>
        <p className="lead fs-6 mt-4">
          You're going to be in good company. We work with
          <br />
          world's leading brands.
        </p>
      </Container>
    </section>
  );
}

export default Brands;
