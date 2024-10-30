import React from 'react';
import { IntroductionProjects } from '../../IU/IntroductionProjects/IntroductionProjects';
import { ProjectList } from '../../IU/ProjectList/ProjectList';

export const Project = () => {
  return (
    <>
      <div className="Container-project">
        <IntroductionProjects />
        <ProjectList />
      </div>
    </>

  );
}


