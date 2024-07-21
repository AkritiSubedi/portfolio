import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <>
    
    <div className="ak_icon">
      <a className="ak_socialmedia" href="https://github.com/AkritiSubedi">
      <FaGithub />
      </a>

      <a
        className="ak_socialmedia"
        href="https://www.linkedin.com/in/akriti-subedi-92b0711ab/"
      >
        <FaLinkedin />
      </a>
      
      <a
        className="ak_socialmedia"
        href="mailto:aakusubedi075@gmail.com"
      >
        <SiGmail />
      </a>
    </div>
    </>
  );
}
export default Footer;
