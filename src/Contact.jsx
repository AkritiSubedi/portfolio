import React from "react";
import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="ak_contact1">
      <div className="ak_contact2">
        <div className="ak_img"></div>
        <div className="ak_name">Akriti Subedi</div>
        <div className="ak_dev">Frontend Developer</div>
        <div className="ak_icon1">
          <a
            className="ak_socialmedia"
            href="https://www.facebook.com/aakusubedi075"
          >
            <FaFacebook />
          </a>
          <a
            className="ak_socialmedia"
            href="https://www.instagram.com/akriti__subedi/"
          >
            <AiFillInstagram />
          </a>
          <a
            className="ak_socialmedia"
            href="https://www.linkedin.com/in/akriti-subedi-92b0711ab/"
          >
            <FaLinkedin />
          </a>
          <a
            className="ak_socialmedia"
            href="https://twitter.com/Its_me_Akriti"
          >
            <FaXTwitter />
          </a>
        </div>
        <div className="ak_cont">
          <div className="ak_ic">
            <FaFacebook />
          </div>
          <div className="ak_txt">Phone</div>
          <div className="ak_num">+9779863786960</div>
        </div>
        <div className="ak_cont">
          <div className="ak_ic">
            <FaFacebook />
          </div>
          <div className="ak_txt">Email</div>
          <div className="ak_num">aakusubedi075@gmail.com</div>
        </div>
        <div className="ak_cont">
          <div className="ak_ic">
            <FaFacebook />
          </div>
          <div className="ak_txt">Location</div>
          <div className="ak_num">Kalanki, Kathmandu</div>
        </div>
      </div>
      <div className="con_heading">Contact</div>
      <div className="ak_contact3">
        <div className="con_phone">
          <div className="con_phone1">Phone:</div>
          <div className="con_phone1">+9779863786960</div>
          <div className="con_phone1">+9779818936121</div>
        </div>
        <div className="con_email">
          <div className="con_phone1">Email:</div>
          <div className="con_phone1">aakusubedi075@gmail.com</div>
        </div>
        <div className="con_form">
          <div className="con_body">
            I am always open to discussing new projects, opportunities in the
            tech world, partnerships, and, more importantly, mentorship.{" "}
          </div>
          <div className="form">
          <form action="submit">

            <label htmlFor="name"></label>
            <input type="text" id="name1" name="name" placeholder="Name" />

            <label htmlFor="email"></label>
            <input type="email" id="name" name="email" placeholder="Email" />

            <label htmlFor="contact"></label>
            <input type="contact" id="name" name="contact" placeholder="Message" />

            <button  className="messages" type="submit">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
