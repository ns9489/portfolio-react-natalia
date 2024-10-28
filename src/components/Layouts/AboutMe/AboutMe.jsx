import React from 'react';
import './AboutMe.css';
import ProfileSection from '../../IU/ProfileSection/ProfileSection';
import SocialIcon from '../../IU/SocialIcon/SocialIcons';
import ContactButton from '../../IU/ContactButton/ContactButton';

export const AboutMe = () => {
  return (
    <>
     <div className='About-container'>
      <ProfileSection />
      </div>
      <div className='Social-container'>
      <SocialIcon />
      <ContactButton />
    </div>
    </>
   
  );
};
