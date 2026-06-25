function Trending() {
  return (
    <section className="tendencias" id="tendencias">
      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"0 40px"}}>
        <div className="tendencias__encabezado">
          <div>
            <div className="seccion-tag">🔥 En tendencia ahora</div>
            <div className="seccion-titulo seccion-titulo--izquierda">Búsquedas populares hoy</div>
          </div>
          <button className="btn-link">Ver todas las categorías →</button>
        </div>
        <div className="tendencias__chips">
          <span className="chip">📱 iPhone 15 Pro Max</span>
          <span className="chip">💻 MacBook Air M3</span>
          <span className="chip">🎮 PlayStation 5</span>
          <span className="chip">📺 Smart TV Samsung 55"</span>
          <span className="chip">🎧 Sony WH-1000XM5</span>
          <span className="chip">👟 Nike Air Max 2024</span>
          <span className="chip">☕ Cafetera Nespresso Vertuo</span>
          <span className="chip">📷 Cámara Canon EOS R50</span>
          <span className="chip">🎮 Xbox Series X</span>
          <span className="chip">⌚ Apple Watch Series 9</span>
        </div>
      </div>
    </section>
  )
}

export default Trending