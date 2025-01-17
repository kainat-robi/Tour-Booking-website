import React, { useContext } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { useRef } from "react";
import { useEffect } from "react";

import { AuthContext } from "../../Context/AuthContxt";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFuncation = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFuncation();

    return window.removeEventListener("scroll", stickyHeaderFuncation);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* == logo == */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* == menu==  */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ==nav button == */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btn d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <button className="btn btn-dark " onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </button>
                    <button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </button>
                  </>
                )}
              </div>
            </div>
            {/* Mobile screen nav menu*/}
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
