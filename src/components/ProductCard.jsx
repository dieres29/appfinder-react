function ProductCard({ imagen, alt, score, mes, marca, nombre, precioActual, precioAntes, ahorro, tiendas, fondo }) {
  return (
    <div className="producto-card">
      <div className={`producto-card__imagen producto-card__imagen--${fondo}`}>
        <img src={imagen} alt={alt} className="producto-card__img" />
        <div className="producto-card__score">⚡ {score}</div>
        <div className="producto-card__mes">📅 Min. {mes}</div>
      </div>
      <div className="producto-card__cuerpo">
        <span className="producto-card__marca">{marca}</span>
        <div className="producto-card__nombre">{nombre}</div>
        <div className="producto-card__precios">
          <div className="producto-card__precio-actual">{precioActual}</div>
          <div className="producto-card__precio-antes">{precioAntes}</div>
          <div className="producto-card__ahorro">{ahorro}</div>
        </div>
        <div className="producto-card__tiendas">
          {tiendas.map((tienda, index) => (
            <span className="tienda-tag" key={index}>{tienda}</span>
          ))}
        </div>
        <button className="producto-card__btn">Ver mejor oferta →</button>
      </div>
    </div>
  )
}

export default ProductCard