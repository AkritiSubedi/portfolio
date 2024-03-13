import React from "react";
import Typewriter from "typewriter-effect";
import "./Firstpage.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

function Firstpage() {
  return (
    <>
      <div className="firstpagecont">
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
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div>
                <h1></h1>
                <a download href="/assets/cv/Akriti-Subedi-cv.pdf">
                  <button className="button">
                    Download Cv
                    <AiOutlineCloudDownload className="text" />
                  </button>
                </a>
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
