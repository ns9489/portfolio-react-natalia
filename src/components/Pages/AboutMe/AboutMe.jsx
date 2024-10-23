import React from 'react';
import './AboutMe.css';
import ProfilePicture from "../../../assets/images/Profile-picture.png";
import GitHubIcon from "../../../assets/Icon/github-logo-24.png";
import InstagramIcon from "../../../assets/Icon/instagram-logo-24.png";
import LinkedinIcon from "../../../assets/Icon/linkedin-logo-24.png";
import TwitterIcon from "../../../assets/Icon/twitter-logo-24.png";

export const AboutMe = () => {
  return (
    <>
      <div className='container'>
        <div className="home-content">
          <div className="text-section">
            <h1>Hi, it's <span>Natalia</span></h1>
            <h3 className="text-animation">I'm a <span></span></h3>
            <p>
              In today’s rapidly changing world, the ability to learn new skills
              is more important than ever. With advancements in
              technology and shifts in the job market, individuals who
              continuously update their skill sets are better equipped
              to succeed. Learning new skills not only enhances personal
              growth but also opens up opportunities for career advancement.
            </p>

            <div className="social-icon">
              <a href="https://github.com/"><img src= {GitHubIcon} alt="GitHub" /></a>
              <a href="https://instagram.com"><img src={InstagramIcon} alt="Instagram" /></a>
              <a href="https://linkedin.com"><img src={LinkedinIcon} alt="Linkedin" /></a>
              <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" /></a>
           
            </div>
            <div className="btn-group">
              <a href="#" className="btn">Hire</a>
              <a href="#" className="btn">Contact</a>
            </div>
          </div>

          <div className='profile'>
            <img src={ProfilePicture} alt="Profile" className='ProfilePicture' />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
