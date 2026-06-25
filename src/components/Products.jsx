import ProductCard from './ProductCard'

function Products() {
  const productos = [
    {
      imagen: "/images/product-iphone.svg",
      alt: "iPhone 15",
      score: "9/10",
      mes: "Nov",
      marca: "Apple",
      nombre: "iPhone 15 — 128GB Negro",
      precioActual: "$3.299.000",
      precioAntes: "$3.899.000",
      ahorro: "−$600k",
      tiendas: ["Amazon", "MercadoLibre", "+3"],
      fondo: "azul"
    },
    {
      imagen: "/images/product-ps5.svg",
      alt: "PlayStation 5",
      score: "8/10",
      mes: "Dic",
      marca: "Sony",
      nombre: "PlayStation 5 Slim — Disc Edition",
      precioActual: "$1.899.000",
      precioAntes: "$2.299.000",
      ahorro: "−$400k",
      tiendas: ["Falabella", "Alkosto", "+2"],
      fondo: "verde"
    },
    {
      imagen: "/images/product-headphones.svg",
      alt: "Sony WH-1000XM5",
      score: "8/10",
      mes: "Nov",
      marca: "Sony",
      nombre: "WH-1000XM5 — Auriculares NC",
      precioActual: "$899.000",
      precioAntes: "$1.199.000",
      ahorro: "−$300k",
      tiendas: ["Amazon", "MercadoLibre"],
      fondo: "morado"
    }
  ]

  return (
    <section className="productos" id="productos">
      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"0 40px"}}>
        <div className="productos__encabezado">
          <div>
            <div className="seccion-tag">Mejores ofertas</div>
            <div className="seccion-titulo seccion-titulo--izquierda">Score IA más alto hoy</div>
          </div>
          <button className="btn-link">Ver todas las ofertas →</button>
        </div>
        <div className="productos__grid">
          {productos.map((producto, index) => (
            <ProductCard key={index} {...producto} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products