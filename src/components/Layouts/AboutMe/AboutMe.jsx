import React from 'react';
import './AboutMe.css';

import {SocialIcon} from '../../IU/SocialIcon/SocialIcons';
import {ContactButton} from '../../IU/ContactButton/ContactButton';
import { ProfileSection } from '../../IU/ProfileSection/ProfileSection';

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
