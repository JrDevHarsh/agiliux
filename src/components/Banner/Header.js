import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const menu_list = [
    {
      title: "Home",
      path: "/",
      isDropDown: false,
    },
    {
      title: "Insurance Products",
      path: "/insurance-products",
      isDropDown: true,
    },
    {
      title: "Renew Your Policy",
      path: "/renew-policy",
      isDropDown: true,
    },
    {
      title: "Support",
      path: "/support",
      isDropDown: true,
    },
  ];
  return (
    <header className="header__top">
      <nav className="header__navbar">
        <div className="navbar__left">
          <Link
            to="/"
            className="main__logo_link"
            aria-label="Go to Homepage"
            title="agiliux"
          >
            <span className="main__logo_text">a</span>
            <span className="main__logo_text">g</span>
            <span className="main__logo_text spec">i</span>
            <span className="main__logo_text">l</span>
            <span className="main__logo_text spec">i</span>
            <span className="main__logo_text">u</span>
            <span className="main__logo_text">x</span>
          </Link>
        </div>
        <div className="navbar__right">
          <ul className="menu__list">
            {menu_list.map((item, index) => (
              <li
                className="menu__item"
                key={`menu-item-${item.title}-${index}`}
              >
                <Link
                  to={`${item.path}`}
                  className="menu__link"
                  aria-label={`Link: ${item.title}`}
                  title={`Go to ${item.title}`}
                >
                  <span className="text">{item.title}</span>
                  {item.isDropDown && <span className="arrow__down"></span>}
                </Link>
              </li>
            ))}
          </ul>
          <div className="btn__block">
            <Link
              to="/"
              className="btn__signup"
              aria-label="Login/Signup button"
              title="Login/Signup"
            >
              Login/Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
