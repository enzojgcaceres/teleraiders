// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Sobre Nosotros</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img src="miembro1.jpg" alt="Miembro 1" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold">Miembro 1</h2>
            <p>Vocalista principal. Enlace a redes sociales.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src="miembro2.jpg" alt="Miembro 2" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold">Miembro 2</h2>
            <p>Guitarrista. Enlace a redes sociales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
