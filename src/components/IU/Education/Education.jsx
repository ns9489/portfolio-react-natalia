import React from 'react';
import './Education.css';
import { TimelineItem } from '../TimelineItem/TimelineItem';


const educationData = [
    {
        title: "Escuela Secundaria",
        description: "Descripción de la educación en secundaria."
    },
    {
        title: "Tecnólogo en Análisis y Desarrollo de Software",
        description: "Descripción de la educación universitaria en 2022."
    },
    {
        title: "Universidad",
        description: "Descripción de la educación universitaria en 2023."
    },
    {
        title: "Trabajo 1",
        description: "Descripción de la primera experiencia laboral."
    }
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
