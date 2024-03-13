import React, { useState, useEffect } from "react";
import "./Form.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
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
    let value = event.target.value;
    let name = event.target.name;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    setFormErrors(() => validate(formValues));

    // onclick={()=>fnc(values)}
    setIsSubmit(true);
  }
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
    <div className="contact_form">
      <h1>My Contact</h1>

      <div className="maincontainer">
        <div className="thirdcontainer">
          <div className="contact1">
            <div className="ak_cont">
              <div className="ak_num">
                <div className="ic2">
                  <FaPhoneAlt />
                </div>
                <div className="email">9863786960</div>
              </div>

              <div className="ak_num">
                <div className="ic2">
                  <CgMail />
                </div>
                <div className="email">aakusubedi075@gmail.com</div>
              </div>
              <div className="ak_num">
                <div className="ic2">
                  <TiLocationArrowOutline />
                </div>
                <div className="email">Kalanki, Kathmandu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <form
            action="https://formspree.io/f/xwkgqqyq"
            method="POST"
            // onSubmit={handleSubmit}
          >
            <label className="name" htmlFor="name"></label>
            <input
              className="name"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
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
            <p>{formErrors.name}</p>
            <label className="name" htmlFor="subject"></label>
            <input
              className="name"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
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
