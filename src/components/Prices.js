import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project",
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: ('./images/GenAiproject.gif'),
      heading: "Leveraging GenAI for Software Project Management",
      desc: "Innovative Use of GenAI in Agile Project Management: Utilized GenAI tools like Autogen, LangChain, and LangGraph to generate 20+ outputs, enhancing planning efficiency by 30%. Applied these tools to optimize Scrum-based sprints and estimations, ensuring precise execution across project phases.",
      tech: "Python, Langchain, Autogen, Langgraph, React ",
      deploy: "https://urban-ladder.vercel.app/",
      github: "https://github.com/RaghavShah01/GenAI-for-Software-Project-Management",
    },
    {
      id: 2,
      poster: ('./images/XAI.gif'),
      heading: "Enhancing Machine Learning Model Using Explainable AI ",
      desc: "• Integrated LIME and SHAP techniques, highlighting top 5 features influencing individual predictions, and increased model transparency and trustworthiness, achieving 98% accuracy on Hotel Review Management Model • Authored and published technical paper on project in Springer LNNS, volume 796, Jan 2024, demonstrating model effectiveness and interpretability techniques",
      tech: "Python, Lime, SHAP, XAI",
      deploy: "https://westside-ecommerce-clone.vercel.app/",
      github: "https://github.com/",
    },
    {
      id: 3,
      poster: ('./images/ChatApp.gif'),
      heading: "Chat Application",
      desc: "• Developed a Flask-based application includes functionality joining 10+ chat groups and chatting • Built front-ends with HTML/CSS, Bootstrap, and JavaScript, and a Python, Flask, and Socket backend for real-time communication. Integrated Firebase for authentication and tested with 100+ users ",
      tech: "Python, Flask, Socket, HTML/CSS, Bootstrap,JavaScript.",
      github: "https://github.com/RaghavShah01/Chat-Application",
    },
    {
      id: 4,
      poster: ('./images/bloghost.gif'),
      heading: "BlogHost",
      desc: "It is Dynamic Blogging Website• On this Platform User can create there Account Post thereBlogs , and show their talent globally• User can select a listed Blogs and they can Read it & Like it.",
      tech: "HTML , CSS , Javascript , Node.js and MongoDB",
      github: "https://github.com/RaghavShah01/Blog-Host",
    },
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          {/* <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p> */}
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
