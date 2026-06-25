import { useState } from 'react'
import SearchBar from './SearchBar'

function Hero() {
  const [resultados, setResultados] = useState([])

  return (
    <section className="hero">
      <div className="hero__inner" style={{maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"center", position:"relative", zIndex:1}}>

        <div>
          <div className="hero__badge">
            <div className="hero__badge-punto"></div>
            Comparador inteligente de precios
          </div>
          <h1 className="hero__titulo">
            Encuentra el<br />
            <span className="hero__titulo-acento">mejor momento</span><br />
            para comprar
          </h1>
          <p className="hero__subtitulo">
            Comparamos precios en Amazon, MercadoLibre y más de 10 tiendas. Nuestro Score IA te dice si conviene comprar hoy o esperar.
          </p>

          <SearchBar onResultados={setResultados} />

          <div className="hero__chips">
            <span className="hero__chips-label">Popular:</span>
            <span className="chip">📱 Samsung Galaxy S24</span>
            <span className="chip">🎮 PlayStation 5</span>
            <span className="chip">💻 MacBook Air M3</span>
            <span className="chip">🎧 AirPods Pro</span>
          </div>

          <div className="hero__stats">
            <div>
              <span className="hero__stat-num">2.4M+</span>
              <div className="hero__stat-label">Productos comparados</div>
            </div>
            <div>
              <span className="hero__stat-num">10+</span>
              <div className="hero__stat-label">Tiendas integradas</div>
            </div>
            <div>
              <span className="hero__stat-num">98%</span>
              <div className="hero__stat-label">Precisión del Score IA</div>
            </div>
          </div>

          {resultados.length > 0 && (
            <div style={{marginTop:"24px"}}>
              <div className="seccion-tag">Resultados de búsqueda</div>
              {resultados.map((p) => (
                <div key={p.id} style={{background:"rgba(92,79,204,0.4)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"12px", padding:"16px", marginBottom:"10px"}}>
                  <div style={{fontWeight:"700", color:"var(--texto)"}}>{p.nombre}</div>
                  <div style={{color:"var(--naranja)", fontWeight:"800", fontSize:"18px"}}>
                    {p.precio.toLocaleString("es-CO", {style:"currency", currency:"COP", minimumFractionDigits:0})}
                  </div>
                  <div style={{color:"var(--texto2)", fontSize:"13px"}}>{p.tiendas.join(" · ")}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{position:"relative", display:"flex", justifyContent:"center"}}>
          <img src="/images/hero-card.svg" alt="iPhone 15" style={{width:"100%", maxWidth:"400px", animation:"flotar 3s ease-in-out infinite"}} />
        </div>

      </div>
    </section>
  )
}

export default Hero