import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/ruta-de-tu-imagen.jpg')" }}>
      <div className="absolute inset-0 bg-black/50"></div> {/* Capa oscura para mejorar el contraste */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold">Dinamo</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Descubre la innovación detrás de nuestro proyecto.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
