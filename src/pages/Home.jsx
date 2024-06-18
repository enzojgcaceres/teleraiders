// src/pages/Home.jsx

import React from 'react';
import { useTheme } from '../context/themeContext';
import backgroundDark from '../assets/carousel/Japan Cover.jpg'; // Asegúrate de tener esta imagen en la carpeta assets
import backgroundLight from '../assets/ligth/pexels-8moments-698275.jpg';

const Home = () => {

  const { theme } = useTheme();

  const backgroundImage = theme === 'dark' ? backgroundDark : backgroundLight;

  return (
    <div 
      className="relative w-full h-auto min-h-screen bg-cover bg-center bg-no-repeat text-black dark:text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '800px' }} // Aquí asegúrate de establecer la altura según la imagen
    >
      <div className="p-4 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 rounded max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Últimas Novedades</h1>
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Nuevo Álbum Próximamente</h2>
            <p>Estamos trabajando en nuestro próximo álbum. ¡Pronto más detalles!</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Concierto en Vivo</h2>
            <p>No te pierdas nuestro próximo concierto en vivo. Fecha y lugar por confirmar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
