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
    <SocialList>
      <SocialItem to="tweeter.com" className="social-icon">
        <FaTwitter />
      </SocialItem>
      <SocialItem to="facebook.com" className="social-icon">
        <FaInstagram />
      </SocialItem>
      <SocialItem to="instagram.com" className="social-icon">
        <FaFacebookF />
      </SocialItem>
      <SocialItem to="linkedin.com" className="social-icon">
        <FaLinkedinIn />
      </SocialItem>
    </SocialList>
  );
}
function SocialList({ children }) {
  return <ul className="social">{children}</ul>;
}

function SocialItem({ children, to, className }) {
  return (
    <li>
      <a href={to} className={className}>
        {children}
      </a>
    </li>
  );
}
