import React from 'react';
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
    <div className="max-w-xl mx-auto p-6 rounded-lg bg-gray-800 shadow-md">
      <h1 className="text-3xl font-serif text-center text-white mb-6">
        Contact <samp className="font-bold text-teal-300">Me</samp>
      </h1>
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white font-semibold mb-2">Nombre:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Tu nombre"
            required
            className="w-full p-2 border border-gray-500 rounded-md bg-gray-700 text-white focus:border-teal-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-semibold mb-2">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full p-2 border border-gray-500 rounded-md bg-gray-700 text-white focus:border-teal-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="msg" className="block text-white font-semibold mb-2">Mensaje:</label>
          <textarea
            id="msg"
            name="msg"
            rows="4"
            placeholder="Tu mensaje"
            required
            className="w-full p-2 border border-gray-500 rounded-md bg-gray-700 text-white focus:border-teal-300 resize-y"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Enviar"
            className="bg-teal-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-teal-400 transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};
