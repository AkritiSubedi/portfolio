import React from "react";
import Typewriter from "typewriter-effect";
import "./Firstpage.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import resume from "../public/Akriti-Subedi-cv.pdf";

function Firstpage() {
  return (
    <>
      <div id="home" className="firstpagecont">
        <div className="firstpage">
          <div className="dcont1">
            <div className="body">
              <div className="maintxt">
                <div className="firstpage_body1">Hi, Its'me</div>
                <div className="firstpage_name">AKRITI SUBEDI</div>
                <div className="firstpage_body">
                 
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: ["I'm Frontend Developer"],
                    }}
                  />
                </div>

                <div className="sectxt">
                  <div className="desc">
                    After completing a ReactJS internship, I bring fresh skills
                    in building dynamic and responsive web applications, coupled
                    with a commitment to clean and efficient code practices.
                    {/* Having successfully completed a rigorous ReactJS internship, I
                  am now equipped with hands-on experience and a solid
                  foundation in React development. I bring fresh perspectives, a
                  passion for innovation, and a commitment to delivering
                  high-quality code. Eager to contribute to your team, I am
                  ready to leverage my newfound skills to elevate your projects
                  and contribute effectively to your organization's success.
                  Let's embark on this journey together and create exceptional
                  web experiences! */}
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div>
                  <button className="buttons">
                <a className="cv" href={resume} download>
                    Download Cv
                    <AiOutlineCloudDownload className="text" />
                </a>
                  </button>
              </div>
            </div>
            <div className="firstpage_img">
              <img className="imag" src="Banner Image.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Firstpage;
