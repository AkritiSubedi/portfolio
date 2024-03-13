import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <div className="ak_icon">
      <a
        className="ak_socialmedia"
        href="https://www.facebook.com/aakusubedi075"
      >
        <FaFacebook />
      </a>
      <a className="ak_socialmedia" href="https://www.instagram.com/akriti__subedi/">
        <AiFillInstagram />
      </a>
      <a className="ak_socialmedia" href="https://www.linkedin.com/in/akriti-subedi-92b0711ab/">
        <FaLinkedin />
      </a>
      <a className="ak_socialmedia" href="https://twitter.com/Its_me_Akriti">
        <FaXTwitter />
      </a>
    </div>
  );
}
export default Footer;
