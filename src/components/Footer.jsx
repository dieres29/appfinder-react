function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">
            <img src="/images/logo.svg" alt="AppFinder" className="footer__logo-img" />
            <span className="footer__logo-texto">App<span className="footer__logo-acento">Finder</span></span>
          </div>
          <div className="footer__desc">Comparamos precios en tiempo real para que nunca pagues de más. El único comparador que te dice cuándo conviene comprar.</div>
        </div>
        <div>
          <div className="footer__columna-titulo">Navegación</div>
          <div className="footer__nav">
            <a href="#" className="footer__link">Cómo funciona</a>
            <a href="#" className="footer__link">Categorías</a>
            <a href="#" className="footer__link">Tendencias</a>
            <a href="#" className="footer__link">Blog de ofertas</a>
          </div>
        </div>
        <div>
          <div className="footer__columna-titulo">Cuenta</div>
          <div className="footer__nav">
            <a href="#" className="footer__link">Iniciar sesión</a>
            <a href="#" className="footer__link">Registrarse</a>
            <a href="#" className="footer__link">Mis alertas</a>
            <a href="#" className="footer__link">Favoritos</a>
          </div>
        </div>
        <div>
          <div className="footer__columna-titulo">Legal</div>
          <div className="footer__nav">
            <a href="#" className="footer__link">Términos de uso</a>
            <a href="#" className="footer__link">Privacidad</a>
            <a href="#" className="footer__link">Cookies</a>
            <a href="#" className="footer__link">Contacto</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyright">© 2026 AppFinder. Todos los derechos reservados.</span>
        <div className="footer__bottom-links">
          <a href="#" className="footer__link">Términos</a>
          <a href="#" className="footer__link">Privacidad</a>
          <a href="#" className="footer__link">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer