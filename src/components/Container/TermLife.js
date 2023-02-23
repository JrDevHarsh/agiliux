import React from "react";
import TermLifeForm from "../Form/TermLife";
import "./TermLife.css";

function TermLife() {
  return (
    <div className="tl__container">
      <div className="tl__box">
        <div className="tl__content">
          <h2 className="tl__title_h2">
            Get Term Life Insurance <span className="blue">For You </span>&
            <span className="blue"> Your Family</span>
          </h2>
          <div className="tl__row">
            <div className="left__col">
              <TermLifeForm />
            </div>
          </div>
          <div className="img__col">
            <img src="/images/family.png" alt="img-of-family" />
            <div className="circle__pink"></div>
            <div className="circle__green"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermLife;
