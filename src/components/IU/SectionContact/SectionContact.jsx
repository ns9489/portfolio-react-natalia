import React from 'react';
import './SectionContact.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; 

export const SectionContact = () => {
  const sendEmail = (event) => {
    event.preventDefault(); 

    emailjs.sendForm('service_q4pof2z', 'template_h2vvyb8', event.target, 'e8FDx6_lKu3ZZ3p7A')
      .then(result => {
        Swal.fire("Su mensaje se ha enviado con éxito");
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No ha sido posible enviar el mensaje",
        });
      });
  };

  return (
    <div className="container-contactMe">
      <h1>Contact <samp>Me</samp></h1>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="username">Nombre:</label>
          <input type="text" id="username" name="username" placeholder="Tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
        </div>
        <div className="form-group">
          <label htmlFor="msg">Mensaje:</label>
          <textarea id="msg" name="msg" rows="4" placeholder="Tu mensaje" required></textarea>
        </div>
      </form>
      <div className="form-button">
          <input type="submit" value="Enviar" />
        </div>
    </div>
  );
}
