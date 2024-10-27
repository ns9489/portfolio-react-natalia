import React from 'react';
import ProfilePicture from "../../../assets/images/Profile-picture.png";
import './ProfileSection.css';
import 'animate.css';

const ProfileSection = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>Hi, it's <span>Natalia</span></h1>
        <h3 className="text-animation">
          I'm a <span className="animate__animated animate__slideInRight repeat-animation">developer</span>
        </h3>
        <p>
          In today’s rapidly changing world, the ability to learn new skills
          is more important than ever. With advancements in
          technology and shifts in the job market, individuals who
          continuously update their skill sets are better equipped
          to succeed. Learning new skills not only enhances personal
          growth but also opens up opportunities for career advancement.
        </p>
      </div>
      <div className='profile'>
        <img src={ProfilePicture} alt="Profile" className='ProfilePicture' />
      </div>
    </div>
  );
};

export default ProfileSection;
