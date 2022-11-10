import React from "react";
import Social from "../Social/Social";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__blocks">
          <div className="footer__grid-item">
            <h3 className="footer__block__heading">Sign-up for email</h3>
            <div className="footer__block__content">
              <nav>
                <ul>
                  <li>
                    <a href="#">Returns (Online Shop)</a>
                  </li>
                  <li>
                    <a href="#">Returns (High Street Store)</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Klarna</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__grid-item">
            <h3 className="footer__block__heading">Helpful Information</h3>
            <div className="footer__block__content">
              <nav>
                <ul>
                  <li>
                    <a href="#">Returns (Online Shop)</a>
                  </li>
                  <li>
                    <a href="#">Returns (High Street Store)</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Klarna</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__grid-item">
            <h3 className="footer__block__heading">Legal</h3>
            <div className="footer__block__content">
              <nav>
                <ul>
                  <li>
                    <a href="#">Returns (Online Shop)</a>
                  </li>
                  <li>
                    <a href="#">Returns (High Street Store)</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Klarna</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__grid-item">
            <h3 className="footer__block__heading">Explore</h3>
            <div className="footer__block__content">
              <nav>
                <ul>
                  <li>
                    <a href="#">Returns (Online Shop)</a>
                  </li>
                  <li>
                    <a href="#">Returns (High Street Store)</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Klarna</a>
                  </li>
                </ul>
              </nav>
              <div className="footer__social__container">
                <h3 className="footer__block__heading">Stay in touch</h3>
                <Social />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          © 2022 Sunrise Records and Entertainment Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
