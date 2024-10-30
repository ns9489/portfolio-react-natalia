import React from 'react';
import './TimelineItem.css';

export const TimelineItem = ({title, description }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

