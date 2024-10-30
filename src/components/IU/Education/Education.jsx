import React from 'react';
import './Education.css';
import { TimelineItem } from '../TimelineItem/TimelineItem';


const educationData = [
    {
        title: "Colegio",
        description: "Terminé mis estudios en el Colegio Simon Bolivar de Samaniego, Nariño, donde adquirí una sólida base en diversas materias y desarrollé habilidades interpersonales a través de actividades extracurriculares."
    },
    {
        title: "Tecnólogo en Análisis y Desarrollo de Software",
        description: "Actualmente estoy cursando un tecnólogo en desarrollo de software, lo que me ha permitido adquirir habilidades prácticas en programación y diseño web "
    },
    {
        title: "Proyecto Personal",
        description: "He trabajado en varios proyectos personales, como la creación de un sitio web para mostrar mis habilidades en programación y diseño, lo que me ha permitido aplicar mis conocimientos de forma práctica."
    },
    {
        title: "Curso de Programación",
        description: "Actualmente estoy realizando un curso de programación en línea para reforzar mis habilidades prácticas en lenguajes como HTML, CSS y JavaScript."
    },

];

export const Education = () => {
    return (
        <div className="education" id="education">
            <h2 className="heading">Educación</h2>
            <div className="timeline-items">
                {educationData.map((item, index) => (
                    <TimelineItem key={index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    );
}
