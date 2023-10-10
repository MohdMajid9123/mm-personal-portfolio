import React from "react";

const Project = () => {
  return (
    <>
      <div className="project_container" id="project">
        <h1>My Latest Project</h1>

        <div className="card_container">
          <div className="card">
            <img src="project_img/1.PNG" alt="project image" />
            <div className="layer_card">
              <a target="_blank" href="https://box-shadow2.netlify.app/">
                Project 1
                <br />
                Click To See .
              </a>
            </div>
          </div>
          {/* second card */}

          <div className="card">
            <img src="project_img/2.PNG" alt="project image" />
            <div className="layer_card">
              <a target="_blank" href="https://guess-game9.netlify.app/">
                Project 2
                <br />
                Click To See .
              </a>
            </div>
          </div>

          {/* third card */}

          <div className="card">
            <img src="project_img/3.PNG" alt="project image" />
            <div className="layer_card">
              <a target="_blank" href="https://text-to-speech2.netlify.app/">
                Project 3
                <br />
                Click To See .
              </a>
            </div>
          </div>

          {/* fourth card */}
          <div className="card">
            <img src="project_img/4.PNG" alt="project image" />
            <div className="layer_card">
              <a target="_blank" href="https://majidmovie.netlify.app/">
                Project 4
                <br />
                Click To See .
              </a>
            </div>
          </div>

          {/* fifth card */}

          <div className="card">
            <img src="project_img/5.PNG" alt="project image" />
            <div className="layer_card">
              <a target="_blank" href="https://weather-app-majid.netlify.app/">
                Project 5
                <br />
                Click To See .
              </a>
            </div>
          </div>

          {/* sixth card */}

          <div className="card">
            <img src="project_img/6.PNG" alt="project image" />
            <div className="layer_card">
              <a target="_blank" href="https://majidreactweb.netlify.app/">
                Project 6
                <br />
                Click To See .
              </a>
            </div>
          </div>

          {/* end card */}
        </div>
      </div>
    </>
  );
};

export default Project;
