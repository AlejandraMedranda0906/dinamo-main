
import "../styles/Header.css"; 

function Header() {
  return (
    <header className="header">
      <h1>Mi Proyecto</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contacto</a>
        <a href="/research">Investigación</a>
      </nav>
    </header>
  );
}

export default Header;
