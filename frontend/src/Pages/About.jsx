import React from "react";
import "../styles/about.css";
import { Container, Row , Col } from "reactstrap";

function About() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="about__heading">About Us</h1>
        </Row>
        <Row>
          <Col lg='10'>
          <p className="about__text">
            Welcome to our Travel Website, where every journey is an
            adventure waiting to unfold. Founded with a passion for exploration
            and a commitment to providing unparalleled travel experiences, we
            are more than just a website – we are your trusted companion on the
            path to discovery. Our story began with a simple desire: to inspire
            wanderlust and ignite a sense of wonder in every traveler's heart.
            From the majestic peaks of the Himalayas to the sun-kissed shores of
            the Mediterranean, we believe that travel has the power to enrich
            lives, broaden horizons, and create lasting memories. With a team of
            seasoned globetrotters, travel enthusiasts, and industry experts, we
            curate a diverse collection of destinations, experiences, and
            insights to cater to every traveler's dream. Whether you're a
            thrill-seeker craving adrenaline-fueled escapades, a culture
            enthusiast yearning to immerse yourself in the rich tapestry of
            traditions, or a leisure traveler seeking serenity in nature's
            embrace, we've got you covered. Our commitment to excellence extends
            beyond mere travel arrangements – it's about crafting unforgettable
            moments, fostering meaningful connections, and leaving a positive
            impact on the places we visit and the people we encounter. We strive
            to empower travelers with the knowledge, resources, and inspiration
            they need to embark on transformative journeys that transcend
            borders and boundaries. Join us as we embark on a voyage of
            discovery, where every destination is a story waiting to be told and
            every traveler is a protagonist in their own narrative. Let's
            wander, explore, and discover the extraordinary together – because
            the world is yours to explore, and the adventure starts here.
          </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
