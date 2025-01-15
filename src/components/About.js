import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Artificial Intelligence Enthusiast",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Raghav Shah" },
    { id: 2, title: "Email:", text: "raghavshah900@gmail.com" },
    { id: 3, title: "Phone:", text: "+1 8722583155" },
    { id: 4, title: "Linkedin", text: "Raghav Shah" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-350 alignTop">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              Hello! I'm Raghav Shah, an Artificial Intelligence and Machine Learning enthusiast with a Master’s in AI from Illinois Institute of Technology. I enjoy leveraging Generative AI tools like LangChain and LangGraph to enhance project efficiency and execution. My work involves integrating Explainable AI techniques, publishing research on AI interpretability, and developing scalable web applications using technologies like React and Flask. With experience in optimizing systems for large-scale data processing and implementing agile workflows, I am passionate about creating innovative solutions that bridge AI and software development to address real-world challenges.
              </div>
              <div className="about__info-p2">Feel Free to Contact me...</div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
