import React from "react";
import "./news-latter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

function NewsLetter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Subscribe to our newsletter and embark on a journey of
                inspiration and discovery! Stay updated with the latest travel
                tips, exclusive offers, and captivating destinations straight to
                your inbox. Don't miss out on the excitement – subscribe now
                and start your extraordinary travel experience with us!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsLetter;
