import React from "react";
import ServiceCard from "./servicesCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";


function servicesList() {

  const servicesData = [
    {
      imgUrl: weatherImg,
      title: "Calculate Weather",
      describtion:
        "Lorem hbdsbbd bjbvbbdjsbdjvbv kaEBBVB DV JWNJS DJSVBWWNNNJDVBB hdvsfvvnkndvn",
    },
    {
      imgUrl: guideImg,
      title: "Best Tour Guide",
      describtion:
        "Lorem hbdsbbd bjbvbbdjsbdjvbv kaEBBVB DV JWNJS DJSVBWWNNNJDVBB hdvsfvvnkndvn",
    },
    {
      imgUrl: customizationImg,
      title: "Customization",
      describtion:
        "Lorem hbdsbbd bjbvbbdjsbdjvbv kaEBBVB DV JWNJS DJSVBWWNNNJDVBB hdvsfvvnkndvn",
    },
  ];
  
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default servicesList;


