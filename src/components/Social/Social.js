import React from "react";
import { createElement } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Social.scss";

export default function Social() {
  return (
    <div className="social-wrapper">
      <SocialList>
        <SocialItem to="tweeter.com" className="social-icon tweeter">
          <FaTwitter />
        </SocialItem>
        <SocialItem to="facebook.com" className="social-icon facebook">
          <FaFacebookF />
        </SocialItem>
        <SocialItem to="instagram.com" className="social-icon instagram">
          <FaInstagram />
        </SocialItem>
        <SocialItem to="linkedin.com" className="social-icon linkedin">
          <FaLinkedinIn />
        </SocialItem>
      </SocialList>
    </div>
  );
}
function SocialList({ children }) {
  return <ul className="social">{children}</ul>;
}

function SocialItem({ children, to, className }) {
  return (
    <li className="social__item">
      <a href={to} className={className}>
        {children}
      </a>
    </li>
  );
}
