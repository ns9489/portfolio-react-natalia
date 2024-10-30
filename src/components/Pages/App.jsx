import React from "react";
import 'animate.css';
import { Header } from "../Layouts/Header/Header";
import { AboutMe } from "../Layouts/AboutMe/AboutMe";
import { EducationSection } from "../Layouts/EducationSection/EducationSection"
import { Project } from "../Layouts/Project/Project";
import { Contact } from "../Layouts/Contact/Contact";
import { FooterSection } from "../IU/FooterSection/FooterSection";

function App() {
  return (
    <>
      <Header />
      <div id="AboutMe">
      <AboutMe />
      </div>
      <div id= "Education">
      <EducationSection />
      </div>
      <div id="Project">
      <Project />
      </div>
     <div id="Contact">
     <Contact/>
     </div>
      
      <FooterSection />
    </>
  );
}

export default App;
