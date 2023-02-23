import React from "react";
import Feature from "../Card/Feature";
import "./Features.css";

function Features() {
  const features__list = [
    {
      title: "Maid Insurance",
      path: "/maid-insurance",
      body: "500/Month",
      img: "girl",
    },
    {
      title: "Medical Insurance",
      path: "/medical-insurance",
      body: "500/Month",
      img: "heart_plus",
    },
    {
      title: "Home Insurance",
      path: "/maid-insurance",
      body: "500/Month",
      img: "home",
    },
    {
      title: "Car Insurance",
      path: "/car-insurance",
      body: "500/Month",
      img: "car",
    },
    {
      title: "Term Life",
      path: "/term-life",
      body: "500/Month",
      img: "people_under_umbrella",
    },
    {
      title: "Investment Plans",
      path: "/investment-plans",
      body: "500/Month",
      img: "savings_hand",
    },
    {
      title: "Retirement",
      path: "/retirement",
      body: "500/Month",
      img: "money_on_chair",
    },
    {
      title: "Child Insurance",
      path: "/child-insurance",
      body: "500/Month",
      img: "happy_child",
    },
  ];

  return (
    <div className="features__container">
      {features__list.map((feature) => (
        <Feature
          key={`feature-${feature.title}`}
          path={feature.path}
          imgName={feature.img}
          title={feature.title}
          body={feature.body}
        />
      ))}
    </div>
  );
}

export default Features;
