import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./Navbar.module.css";
import { IconContext } from "react-icons";

function Navbar({ currentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://heremyas.com">
          go to heremyas.me
        </a>
        <button
          className={`${style.NavbarToggleButton} navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={style.toggler}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <GiHamburgerMenu />
            </IconContext.Provider>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={"/"}>
                <span
                  className={`nav-link ${currentPage === 1 ? "active" : ""}`}
                  aria-current="page"
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/about"}>
                <span
                  className={`nav-link ${currentPage === 2 ? "active" : ""}`}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/projects"}>
                <span
                  className={`nav-link ${currentPage === 3 ? "active" : ""}`}
                >
                  Projects
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/internship"}>
                <span
                  className={`nav-link ${currentPage === 5 ? "active" : ""}`}
                >
                  Experience
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/certificates"}>
                <span
                  className={`nav-link ${currentPage === 4 ? "active" : ""}`}
                >
                  Certificates
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={"/skills"}>
                <span
                  className={`nav-link ${currentPage === 6 ? "active" : ""}`}
                >
                  Skills
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/resume"}>
                <span
                  className={`nav-link ${currentPage === 7 ? "active" : ""}`}
                >
                  Resume
                </span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href={"/youtube"}>
                <span
                  className={`nav-link ${currentPage === 8 ? "active" : ""}`}
                >
                  Youtube
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
