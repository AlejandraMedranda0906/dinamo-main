import { Link } from "react-router-dom";
import imagen from "../assets/1portada.jpg"; 

const Home = () => {
  return (
    <div className="relative h-screen flex flex-col bg-[#5a3223] text-white">
      {/* NAVBAR CENTRADO */}
      <nav className="bg-black text-white py-4 px-8">
        <div className="container mx-auto text-center">
          {/* Título centrado */}
          <h1 className="text-3xl font-bold mb-4 text-center">Dinamo</h1>
          {/* Enlaces centrados */}
          <ul className="flex justify-center space-x-8 text-lg">
            <li><Link to="/introduction" className="hover:text-gray-400">Introducción</Link></li>
            <li><Link to="/methodology" className="hover:text-gray-400">Metodología</Link></li>
            <li><Link to="/justification" className="hover:text-gray-400">Objetivos</Link></li>
            <li><Link to="/conclusion" className="hover:text-gray-400">Conclusión</Link></li>
            <li><Link to="/results" className="hover:text-gray-400">Resultados</Link></li>
          </ul>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-grow items-center justify-center px-10">
        {/* Contenedor para la imagen y el texto */}
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
          {/* Imagen centrada */}
          <div className="flex justify-center w-full md:w-1/3 mb-6 md:mb-0">
            <img 
              src={imagen} 
              alt="Portada" 
              className="w-full max-w-sm rounded-lg shadow-lg object-cover" 
            />
          </div>

          {/* Texto centrado */}
          <div className="w-full md:w-2/3 md:pl-10 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Generación de energía limpia mediante un dinamo en bicicletas estáticas para la carga de dispositivos móviles y la reducción del impacto ambiental.
            </h2>
            <p className="text-lg mt-4 leading-relaxed">
              El estudio aborda un innovador sistema para abastecer energía limpia mediante un dinamo instalado en bicicletas estáticas del gimnasio “One Sport”, que genera energía cinética, es decir, la transformación de la energía cinética de las bicicletas en energía eléctrica, permitiendo el suministro de energía de los dispositivos electrónicos. Para que la carga del powerbank con capacidad de 20.000 mAh y una corriente de carga de 2.000 mA sea completada, necesita pedalear una distancia de 165 km. 
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Para abordar la maquetación del circuito electrónico del proyecto, se utilizan herramientas como Tinkercad. Para recolectar datos sobre la eficacia del sistema se utilizó la herramienta Spring Boot, y el desarrollo de la interfaz del usuario se desarrolló utilizando React Native. Con el propósito de que los usuarios del gimnasio puedan cargar sus dispositivos móviles mientras realizan la fase de calentamiento de su entrenamiento, la eficacia del proyecto refleja la viabilidad del sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;