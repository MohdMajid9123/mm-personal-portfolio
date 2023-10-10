import React from "react";

const Service = () => {
  return (
    <>
      <div className="Service_container" id="service">
        <div className="s_left">
          <h1>My Awesome</h1>
          <h2>Service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quod earum culpa blanditiis!
          </p>
          <a href="RESUME.pdf" download target="_blank">
            <button className="btn">Download CV</button>
          </a>
        </div>
        <div className="s_right">
          <div className="s_card">
            <img src="img/heartemoji.png" alt="" />
            <h3>Design</h3>
            <p>
              Figma,Sketch,Photoshop <br /> .Adobe.Adobe xd
            </p>
            <a href="#">LEARN MORE</a>
          </div>
          {/* second card */}
          <div className="s_card">
            <img src="img/glasses.png" alt="" />
            <h3>Developer</h3>
            <p>Html,Css,JavaScript,React</p>
            <a href="#">LEARN MORE</a>
          </div>
          {/* third card */}
          <div className="s_card">
            <img src="img/humble.png" alt="" />
            <h3>UI/UX</h3>
            <p>
              Figma,Sketch,Photoshop <br /> .Adobe.Adobe xd
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          {/* third card end */}
        </div>
      </div>
    </>
  );
};

export default Service;
