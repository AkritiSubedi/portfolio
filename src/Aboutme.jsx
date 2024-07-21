import React, { useState } from "react";
import "./Aboutme.css";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

function Aboutme() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div id="AboutMe" className="About">
      <h1 className="aboutme">About Me</h1>
      <div className="maincont1">
        <div className="dcont11">
          <div className="dcont12">
            <div className="banner-image">
              <img className="img12" src="pimg.png" />
            </div>

            <div className="body1">
              <div className="maintxt1">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="body_frontend"
                >
                  Frontend Developer
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="body_desc"
                >
                  {isExpanded ? (
                    <>
                      I am a curious, adaptable, and responsible individual with
                      a relentless thirst for knowledge and a keen eye on my
                      goals. My current aim is to advance in my career and
                      explore more challenging roles. With a strong foundation
                      in development and a natural drive for learning, I am
                      ready to tackle complex tasks, innovate, and bring value
                      to projects.I look forward to contributing my skills and
                      dedication to your development team and achieving
                      excellence in my career as I embrace new challenges and
                      opportunities. I'd love to connect. Feel free to reach
                      out, and let's explore how we can create something
                      remarkable together.
                    </>
                  ) : (
                    <>
                      I am a curious, adaptable, and responsible individual with
                      a relentless thirst for knowledge and a keen eye on my
                      goals. My current aim is to advance in my career and
                      explore more challenging roles. With a strong foundation
                      in development and a natural drive for learning, I am
                      ready to tackle complex tasks, innovate, and bring value
                      to projects.{" "}
                      <span onClick={toggleExpand} className="read-more">
                        <button className="readmore">Read more</button>
                      </span>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
