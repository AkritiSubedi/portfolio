import React, { useState, useEffect } from "react";
import "./Form.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdLocalPhone } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";

function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleClick(event) {
    event.preventDefault();
    setFormErrors(() => validate(formValues));
    setIsSubmit(true);
  }
  const textareaStyle = {
    background: formValues.message ? "white" : "rgba(255, 228, 195, 0.30)",
    background: formValues.subject ? "white" : "rgba(255, 228, 195, 0.30)",

  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }

    return errors;
  };

  return (
    <div id="form" className="contact_form">
      <h1 className="heading">My Contact</h1>

      <div className="maincontainer">
        <div className="thirdcontainer">
          <div className="contact1">
            <div className="ak_cont">
              <div className="topic">Let's Work Together</div>
              <div className="ak_num">
                <div className="ic2">
                <a href="tel:+9779863786960">
                    <MdLocalPhone />
                  </a>
                </div>
                <div className="email"><a href="tel:+9779863786960">9863786960</a></div>
              </div>

              <div className="ak_num">
                <div className="ic2">
                <a href="mailto:aakusubedi075@gmail.com">
    <CgMail />
  </a>
                </div>
                <div className="email"><a href="mailto:aakusubedi075@gmail.com">aakusubedi075@gmail.com</a></div>
              </div>
              <div className="ak_num">
                <div className="ic2">
                  <a href="">

                  <TiLocationArrowOutline />
                  </a>
                </div>
                <div className="email">Kalanki, Kathmandu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <form
             action="https://formspree.io/f/xwkgjeyq"
             method="POST"
          >
            <label className="name" htmlFor="name"></label>
            <input
              className="name"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              value={formValues.name}
              onChange={handleChange}
            />

            <label className="name" htmlFor="email"></label>
            <input
              className="name"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <p>{formErrors.email}</p>
            <label className="name" htmlFor="subject"></label>
            <input
              className="name"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formValues.subject}
              required
              onChange={handleChange}
            />

            <label className="name" htmlFor="message"></label>
            <textarea
              className="name"
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
              cols="50"
              form="usrform"
              value={formValues.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            ></textarea>

            <button className="messages" type="submit">
              <h4>Send message</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
