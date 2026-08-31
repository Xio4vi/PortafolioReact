function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <a href="#Inicio" className="navbar-brand fw-bold">
          Xiomara Villarruel
        </a>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#Inicio" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-link">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a href="#Skills" className="nav-link">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a href="#cotizador" className="nav-link">
                Cotizador
              </a>
            </li>
            <li className="nav-item">
              <a href="#solicitar" className="nav-link">
                Solicitar
              </a>
            </li>
            <li className="nav-item">
              <a href="#Registro" className="nav-link">
                Registro
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">
                Contacto
              </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;