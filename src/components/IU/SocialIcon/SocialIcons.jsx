import React from 'react';
import './SocialIcons.css'; 
import GitHubIcon from "../../../assets/Icon/github-logo-24.png";
import InstagramIcon from "../../../assets/Icon/instagram-logo-24.png";
import LinkedinIcon from "../../../assets/Icon/linkedin-logo-24.png";
import TwitterIcon from "../../../assets/Icon/twitter-logo-24.png";

export const SocialIcon = () => {
    return(

        <div className="social-icon">
        <a href="https://github.com/"><img src= {GitHubIcon} alt="GitHub" /></a>
        <a href="https://instagram.com"><img src={InstagramIcon} alt="Instagram" /></a>
        <a href="https://linkedin.com"><img src={LinkedinIcon} alt="Linkedin" /></a>
        <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" /></a>
      </div>
    )
}
export default SocialIcon;

