import React from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './ProjectList.css';
import Project1 from '../../../assets/images/Project1.png'
import Project2 from '../../../assets/images/Project2.png'
import Project3 from '../../../assets/images/Project3.jpg'

const projectsData = [
  {
    title: "Gestión de Biblioteca",
    description: "API desarrollada en Java para la gestión de una biblioteca. Incluye funcionalidades para el alquiler de libros.",
    image: Project1
  },
  {
    title: "API TempControl",
    description: "API de Control de Temperatura diseñada para gestionar y monitorear dispositivos de temperatura en tiempo real.",
    image: Project2
  },
  {
    title: "Ecommers",
    description: "Ecommers es una plataforma de comercio donde le permite a los usuarios explorar y comprar productos de manera intuitiva.",
    image: Project3
  },
]
export const ProjectList = () => {

  return (
    <div className="project-list">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};
