import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dinamo</h1>
      <ul className="flex space-x-6">
        <li><Link to="/introduction" className="hover:text-red-500">Introducción</Link></li>
        <li><Link to="/justification" className="hover:text-red-500">Justificación</Link></li>
        <li><Link to="/methodology" className="hover:text-red-500">Metodología</Link></li>
        <li><Link to="/conclusion" className="hover:text-red-500">Conclusión</Link></li>
        <li><Link to="/results" className="hover:text-red-500">Resultados</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
