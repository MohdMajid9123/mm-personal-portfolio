import React from "react";

const Hero = () => {
  return (
    <>
      <div className="Hero_container" id="home">
        <div className="h_content">
          <div className="h_left">
            <h1>Hy ! I am Majid</h1>
            <h2> A Front-End Developer</h2>

            <p>
              Front-End Developer with high level of experience in web
              desingning and development,producting the Quality Work
            </p>
          </div>
          <a href="RESUME.pdf" download target="_blank">
            <button className="h_button">Hire Me</button>
          </a>
          <div className="h_icon">
            <a href="https://github.com/" target="_blank">
              <img src="img/github.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-majid-2b7927258/"
              target="_blank"
            >
              <img src="img/linkedin.png" alt="linkedin img" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="img/instagram.png" alt="" />
            </a>
          </div>
        </div>
        {/* hero right code */}
        <div className="h_right">
          <img src="boy.png" className="boy" alt="" />
          <div className="emoji animate__backInDown animate__animated">
            <img src="img/glassesimoji.png" alt="" />
          </div>
          <div className="web_developer animate__animated animate__backInRight">
            <img src="img/crown.png" alt="" />
            <span>
              Web
              <br />
              Developer
            </span>
          </div>
          <div className="best_design animate__animated animate__backInRight">
            <img src="img/thumbup.png" alt="" />
            <span>
              Best Design <br /> Award
            </span>
          </div>

          <div className="blur"></div>
          <div className="blur1"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
