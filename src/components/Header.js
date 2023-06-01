import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import slider_01 from "./img/slider_01.jpg";
import slider_02 from "./img/slider_02.jpg";
import slider_03 from "./img/slider_03.jpg";
import logo from "./img/logo.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Header = () => {
  return (
    <header>
      <div className="slider">
  <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
    <div>
      <img src={slider_01} alt="Imagen 1" />
    </div>
    <div>
      <img src={slider_02} alt="Imagen 2" />
    </div>
    <div>
      <img src={slider_03} alt="Imagen 3" />
    </div>
  </Carousel>
</div>

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Pages
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Elements
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Shop
            </a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} style={{ color: "#fcfcfc" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#fcfcfc" }} />
        <FontAwesomeIcon icon={faTwitter} style={{ color: "#fcfcfc" }} />
      </div>
    </header>
  );
};

export default Header;
