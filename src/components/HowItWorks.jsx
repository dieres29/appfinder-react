function HowItWorks() {
  return (
    <section className="pasos">
      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"0 40px"}}>
        <div className="pasos__encabezado">
          <div className="seccion-tag">Proceso</div>
          <div className="seccion-titulo">¿Cómo funciona?</div>
          <div className="seccion-subtitulo">En cuatro pasos simples pasas de buscar a comprar al mejor precio posible.</div>
        </div>
        <div className="pasos__grid">
          <div className="paso">
            <div className="paso__numero">01</div>
            <div className="paso__icono">🔍</div>
            <div className="paso__titulo">Busca tu producto</div>
            <div className="paso__desc">Escribe el nombre del producto que quieres comprar en la barra de búsqueda.</div>
          </div>
          <div className="paso">
            <div className="paso__numero">02</div>
            <div className="paso__icono">📊</div>
            <div className="paso__titulo">Compara precios</div>
            <div className="paso__desc">Vemos el precio en todas las tiendas y te mostramos el historial completo.</div>
          </div>
          <div className="paso">
            <div className="paso__numero">03</div>
            <div className="paso__icono">🤖</div>
            <div className="paso__titulo">Revisa el Score IA</div>
            <div className="paso__desc">Nuestro algoritmo analiza si es buen momento para comprar o si debes esperar.</div>
          </div>
          <div className="paso">
            <div className="paso__numero">04</div>
            <div className="paso__icono">🛒</div>
            <div className="paso__titulo">Compra o crea alerta</div>
            <div className="paso__desc">Compra ahora en la mejor tienda o activa una alerta para cuando baje el precio.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks