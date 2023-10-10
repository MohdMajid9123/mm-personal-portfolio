import React from "react";
import "./Sass/Main.scss";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Service from "./component/Service/Service";
import Project from "./component/Project/Project";
import Client from "./component/client/Client";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import ScrollBtn from "./component/ScrollBtn/ScrollBtn";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Project />
      <Client />
      <Contact />
      <ScrollBtn />
      <Footer />
    </>
  );
};

export default App;
