import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-red-500">Dinamo</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-400">Inicio</Link></li>
            <li><Link to="/introduction" className="hover:text-gray-400">Introducción</Link></li>
            <li><Link to="/justification" className="hover:text-gray-400">Justificación</Link></li>
            <li><Link to="/methodology" className="hover:text-gray-400">Metodología</Link></li>
            <li><Link to="/conclusion" className="hover:text-gray-400">Conclusión</Link></li>
            <li><Link to="/reference" className="hover:text-gray-400">Referencias</Link></li>
            <li><Link to="/results" className="hover:text-gray-400">Resultados</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
