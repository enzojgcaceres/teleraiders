// src/pages/Home.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

import image1 from '../assets/carousel/Japan cover III.jpg'; // Asegúrate de tener estas imágenes en la carpeta assets
import image2 from '../assets/carousel/Japan Cover.jpg';


const Home = () => {
  return (
    <div className="relative h-screen">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div>
          <img src={image1} alt="Image 1" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="object-cover w-full h-full" />
        </div>
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full p-4 bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-black dark:text-white flex flex-col justify-center items-center">
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
