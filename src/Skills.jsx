import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
function Skills() {
  return (
    <div className="main_skills">
      <h1 className="skills">My Skills</h1>
      <div className="Smaincont">
        <div className="Sdcont">
          <div className="Sdcont1">
            <div className="Sbanner-image-container">
              <img className="Simg1" src="image1.png " />
            </div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="Sbody"
            >
              <div className="Smaintxt">
                <div className="about_hire">Why You Hire Me ?</div>
                <div className="about_body">
                  Having successfully completed a rigorous ReactJS internship, I
                  am now equipped with hands-on experience and a solid
                  foundation in React development. I bring fresh perspectives, a
                  passion for innovation, and a commitment to delivering
                  high-quality code. Eager to contribute to your team, I am
                  ready to leverage my newfound skills to elevate your projects
                  and contribute effectively to your organization's success.
                  Let's embark on this journey together and create exceptional
                  web experiences!
                </div>
                <h3 className="about_skills1">Html</h3>
                <div className="aboutskills2"></div>
                <div className="aboutskills11"></div>
                <h3 className="about_skills1">Css</h3>
                <div className="aboutskills2"></div>
                <div className="aboutskills12"></div>
                <h3 className="about_skills1">Js</h3>
                <div className="aboutskills2"></div>
                <div className="aboutskills13"></div>
                <h3 className="about_skills1">React js</h3>
                <div className="aboutskills2"></div>
                <div className="aboutskills14"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="about_heading">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="about_img"
        ></motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="about_topic"
        >
          <h3 className="about_me">SKills</h3>
          <h1 className="about_hire">Why you hire me?</h1>

          <p className="about_body">
            Having successfully completed a rigorous ReactJS internship, I am
            now equipped with hands-on experience and a solid foundation in
            React development. I bring fresh perspectives, a passion for
            innovation, and a commitment to delivering high-quality code. Eager
            to contribute to your team, I am ready to leverage my newfound
            skills to elevate your projects and contribute effectively to your
            organization's success. Let's embark on this journey together and
            create exceptional web experiences!
          </p>

          <h3 className="about_skills1">Html</h3>
          <div className="aboutskills2"></div>
          <div className="aboutskills11"></div>
          <h3 className="about_skills1">Css</h3>
          <div className="aboutskills2"></div>
          <div className="aboutskills12"></div>
          <h3 className="about_skills1">Js</h3>
          <div className="aboutskills2"></div>
          <div className="aboutskills13"></div>
          <h3 className="about_skills1">React js</h3>
          <div className="aboutskills2"></div>
          <div className="aboutskills14"></div>
        </motion.div>
      </div> */}
    </div>
  );
}

export default Skills;
