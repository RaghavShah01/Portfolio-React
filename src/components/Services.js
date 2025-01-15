import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiRedux, SiExpress } from "react-icons/si";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
    text: "I am passionate about tech and keen to learn new technology and skills...",
  });
  const [state] = React.useState([
    {
      id: 8,
      heading: "Python",
    },
    {
      id: 7,
      heading: "C++",
    },
    {
      id: 7,
      heading: "Java",
    },
    {
      id: 7,
      heading: "JavaScript",
    },
    {
      id: 1,
      heading: "Artificial Intelligence",
    },
    {
      id: 2,
      heading: "Machine Learning",
    },
    {
      id: 3,
      heading: "NLP",
    },
    {
      id: 4,
      heading: "Computer Vision",
    },
    {
      id: 6,
      heading: "GenAI",
    },
    {
      id: 5,
      heading: "Web Development",
    },
    {
      id: 6,
      heading: "Android Development",
    },
    {
      id: 7,
      heading: "Node Js",
    },
    {
      id: 8,
      heading: "Express Js",
    },
    {
      id: 7,
      heading: "Mongo DB",
    },
    {
      id: 5,
      heading: "Firebase",
    },
    {
      id: 7,
      heading: "SQL",
    },
    {
      id: 7,
      heading: "Git",
    },
  ]);
  return (
    <div className="services skills">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
