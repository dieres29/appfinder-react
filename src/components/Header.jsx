function Header() {
  return (
    <header className="header">
      <div className="header__contenedor">
        <a href="#" className="header__logo">
          <img src="/images/logo.svg" alt="AppFinder logo" className="header__logo-img" />
          <span className="header__logo-texto">App<span className="header__logo-acento">Finder</span></span>
        </a>
        <nav className="header__nav">
          <a href="#como-funciona" className="header__nav-link">Cómo funciona</a>
          <a href="#productos" className="header__nav-link">Categorías</a>
          <a href="#tendencias" className="header__nav-link">Tendencias</a>
        </nav>
        <div className="header__acciones">
          <button className="btn btn--secundario">Iniciar sesión</button>
          <button className="btn btn--primario">Registrarse gratis</button>
        </div>
      </div>
    </header>
  )
}

export default Header