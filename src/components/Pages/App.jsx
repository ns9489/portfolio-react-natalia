import React from "react";
import 'animate.css';
import { Header } from "../Layouts/Header/Header";
import { AboutMe } from "../Layouts/AboutMe/AboutMe";
import { EducationSection } from "../Layouts/EducationSection/EducationSection"
import { Project } from "../Layouts/Project/Project";
import { FooterSection } from "../IU/footerSection/footerSection";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <EducationSection />
      <Project />
      <FooterSection />
    </>
  );
}

export default App;
