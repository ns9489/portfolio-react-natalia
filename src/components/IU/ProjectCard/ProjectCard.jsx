import React from 'react';

export const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="w-72 border border-[#2accb6] rounded-lg overflow-hidden shadow-md shadow-[#6ec4b1] transition-transform duration-200 ease-in-out transform bg-[#333] hover:scale-105 m-1">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl mb-2 text-white">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};
