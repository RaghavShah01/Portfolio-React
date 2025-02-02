import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Banner = () => {
  const [state] = useState({
    title: "I am Raghav Shah",
  });

  // Titles for the typing effect
  const titles = [
    "AI Engineer",
    "Data Science Engineer",
    "Machine Learning Engineer",
    "Software Developer",
    "Full Stack Developer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[currentTitleIndex];

      if (!isDeleting && currentTitle.length < fullTitle.length) {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length + 1));
        setTypingSpeed(150); // Normal typing speed
      } else if (isDeleting && currentTitle.length > 0) {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length - 1));
        setTypingSpeed(100); // Faster deleting speed
      } else if (!isDeleting && currentTitle.length === fullTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentTitle.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length); // Move to next title
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [currentTitle, isDeleting, typingSpeed, titles, currentTitleIndex]);

  return (
    <header className="header home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a
                    href="https://www.linkedin.com/in/raghav-shah01/"
                    target="_blank"
                  >
                    <li>
                      <FaLinkedin className="contactIcon" />
                    </li>
                  </a>
                  <a href="https://github.com/RaghavShah01" target="_blank">
                    <li>
                      <FaGithub className="contactIcon" />
                    </li>
                  </a>
                </ul>
                <h1>{state.title}</h1>
                <p>{currentTitle}</p>
                <div className="header__buttons">
                  <a
                    href="https://drive.google.com/file/d/1YrYiD3-pEbELFOf8YGDtFoqjD68YhVwZ/view?usp=sharing"
                    target="_blank"
                    className="btn btn-outline"
                  >
                    Get Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <Link spy={true} smooth={true} duration={500} to={"about"}>
                    <a href="" className="btn btn-smart">
                      About Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
