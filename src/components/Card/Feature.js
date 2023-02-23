import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Feature.css";

function Feature({ imgName, path, title, body }) {
  return (
    <div className="feat__card">
      <Link to={`${path}`} className="feat__box" aria-label="Feature: Demo">
        <div className="feat__content">
          <div className="feat__img">
            <img
              src={`/images/icons/${imgName}.svg`}
              alt={`img-of-${imgName}`}
            />
          </div>
          <div className="feat__details">
            <p className="feat__title">{title}</p>
            <p className="feat__info">{body}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Feature.propTypes = {
  imgName: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Feature;
