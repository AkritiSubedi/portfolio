import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const skillset = [
  {
    title: "HTML",
    width: 80,
  },
  {
    title: "CSS",
    width: 70,
  },
  {
    title: "JS",
    width: 50,
  },
  {
    title: "React Js",
    width: 60,
  },
  {
    title: "Flutter Framework",
    width: 40,
  },
  {
    title: "Video Editing(Adobe Premiere Pro)",
    width: 40,
  },
];

function Skills() {
  return (
    <>
      <div id="skills" className="main_skills">
        <h1 className="heading">My Skills</h1>

        <div className="Sdcont1">
          <div className="Smaintxt">
            <div className="tech">Technical Skills</div>
            {skillset.map((skill) => {
              return <SkillsBar title={skill.title} width={skill.width} />;
            })}
          </div>
        </div>
        <div className="Sdcont1">
          <div className="Smaintxt">
            <div className="tech">Professional Skills</div>
            <div className="all">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-3">
                    <div className="fill-3"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill-3"></div>
                  </div>
                  <div className="inside-circle">75%</div>
                </div>
                <div className="pskills">Problem Solving</div>
              </div>
              
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-1">
                    <div className="fill-1"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill-1"></div>
                  </div>
                  <div className="inside-circle">80%</div>
                </div>
                <div className="pskills">Critical Thinking</div>
              </div>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-3">
                    <div className="fill-3"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill-3"></div>
                  </div>
                  <div className="inside-circle">75%</div>
                </div>
                <div className="pskills">Creativity</div>
              </div>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-1">
                    <div className="fill-1"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill-1"></div>
                  </div>
                  <div className="inside-circle">80%</div>
                </div>
                <div className="pskills">Team Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

function SkillsBar({ title, width }) {
  return (
    <>
      <h3 className="about_skills1">{title}</h3>
      <div className="aboutskills2"></div>
      <div className="aboutskills11" style={{ width: `${width}%` }}></div>
    </>
  );
}
