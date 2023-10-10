import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact_container" id="contact">
        <div className="left">
          <h1>Get In Touch</h1>
          <h2>Contact Me</h2>
        </div>
        <div className="right">
          <form action="https://formspree.io/f/mwkjqekw" method="POST">
            <label htmlFor="">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                autoComplete="off"
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="off"
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              <textarea
                placeholder="Message"
                name="textarea"
                required
                autoComplete="off"
              ></textarea>
            </label>
            <br />
            <br />
            <input type="submit" name="submit" value={"Send"} className="btn" />
          </form>
          <div className="blur"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
