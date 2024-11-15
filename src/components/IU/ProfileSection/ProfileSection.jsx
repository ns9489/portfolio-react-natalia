import React from 'react'
import ProfilePicture from "../../../assets/images/Profile-picture.png";

export const ProfileSection = () => {
  return ( <div className="flex justify-center items-center p-20 max-w-7xl mx-auto gap-20">
    <div className="text-section">
      <h1>Hola, Soy <span className='text-[rgba(12,238,200,0.8)]'>Natalia</span></h1>
      <h3 className="text-[1rem] text-animation">
        I'm a <span className="text-[rgba(12,238,200,0.8)] developer">developer</span>
      </h3>

      <p className='font-redhat'>
        "Como desarrolladora y analista de software, me especializo en construir aplicaciones web
        prácticas y adaptadas a los objetivos del usuario. Me motiva perfeccionar mis habilidades técnicas
        y aportar soluciones creativas que mejoren la funcionalidad y la experiencia de usuario."
      </p>
    </div>
    <div className='profile ml-16 ' >
      <img src={ProfilePicture} alt="Profile" className='w-30 rounded-full shadow-[0_0_25px_rgba(12,238,200,0.8)] transition ease-in-out duration-100' />
    </div>
  </div>
  )
}




