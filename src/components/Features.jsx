function Features() {
  return (
    <section className="features" id="como-funciona">
      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"0 40px"}}>
        <div className="features__encabezado">
          <div className="seccion-tag">Por qué AppFinder</div>
          <div className="seccion-titulo">Todo lo que necesitas<br />para comprar mejor</div>
          <div className="seccion-subtitulo">No solo te mostramos el precio de hoy. Te decimos si vale la pena comprar ahora o si conviene esperar.</div>
        </div>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icono">📊</div>
            <div className="feature-card__titulo">Historial de precios</div>
            <div className="feature-card__desc">Visualiza cómo ha cambiado el precio durante los últimos 12 meses en todas las tiendas. Descubre el mes más barato del año.</div>
          </div>
          <div className="feature-card">
            <div className="feature-card__icono">🤖</div>
            <div className="feature-card__titulo">Score IA de compra</div>
            <div className="feature-card__desc">Nuestro algoritmo analiza patrones históricos y te da un score del 1 al 10 indicando qué tan buen momento es para comprar hoy.</div>
          </div>
          <div className="feature-card">
            <div className="feature-card__icono">🔔</div>
            <div className="feature-card__titulo">Alertas inteligentes</div>
            <div className="feature-card__desc">Define el precio que quieres pagar y recibe una notificación instantánea cuando el producto llegue a ese valor en cualquier tienda.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features