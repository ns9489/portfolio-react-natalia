import React from 'react';
import ProfilePicture from "../../../assets/images/Profile-picture.png";
import './ProfileSection.css';
import 'animate.css';

export const ProfileSection = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>Hola, Soy <span>Natalia</span></h1>
        <h3 className="text-animation">
          I'm a <span className="animate__animated animate__slideInRight repeat-animation">developer</span>
        </h3>
        <p>
        "Como desarrolladora y analista de software, me especializo en construir aplicaciones web
         prácticas y adaptadas a los objetivos del usuario. Me motiva perfeccionar mis habilidades técnicas
         y aportar soluciones creativas que mejoren la funcionalidad y la experiencia de usuario."
        </p>
      </div>
      <div className='profile'>
        <img src={ProfilePicture} alt="Profile" className='ProfilePicture' />
      </div>
    </div>
  );
};

export default ProfileSection;
