import React from "react";
import './App.css';
import { Header } from "../Layouts/Header/Header";
import { AboutMe } from "../Layouts/AboutMe/AboutMe";

import { Project } from "../Layouts/Project/Project";
import { Contact } from "../Layouts/Contact/Contact";
import { FooterSection } from "../IU/FooterSection/FooterSection";

export function App() {
  return (
    <>
      <Header />
      <div id="AboutMe">
      <AboutMe />
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

