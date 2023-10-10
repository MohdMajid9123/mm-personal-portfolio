import React, { useState } from "react";

const Navbar = () => {
  const [item, setItem] = useState(false);

  const toggler = () => {
    setItem(!item);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Md Majid</a>
        </div>

        <div className="n-right">
          <div className="list" style={{ display: item ? "block" : "" }}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#client">Testimonial</a>
              </li>
            </ul>
          </div>
          {/* toggle button here */}

          <a href="#contact" className="btn">
            Contact Us
          </a>
          <div className="Nav_icon">
            <p onClick={toggler}>{`${item ? "\u2929" : "\u21F6"}`}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
