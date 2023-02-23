import React from "react";
import FeaturesContainer from "../../components/Container/Features";
import "./Home.css";

function Home() {
  return (
    <>
      <main className="home__main">
        <div className="main__container">
          <section className="container__box">
            <h2 className="title__h2">
              Get the best insurance plans and buy them instantly.
            </h2>
            <div className="stats__row">
              <div className="stat">
                <img
                  className="stat__img"
                  src="/images/icons/heart.svg"
                  alt=""
                />
                <p className="stat__text">
                  <span className="pink">50+ Insurances</span> with one of the
                  best prices
                </p>
              </div>
              <div className="stat">
                <img
                  className="stat__img"
                  src="/images/icons/storm.svg"
                  alt=""
                />
                <p className="stat__text">
                  <span className="pink">Quick, Easy</span> & Hassel Free
                </p>
              </div>
            </div>
            <FeaturesContainer />
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
