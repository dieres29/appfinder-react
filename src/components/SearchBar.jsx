import { useState } from 'react'

function SearchBar({ onResultados }) {
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(false)

  const buscar = async () => {
    if (!busqueda.trim()) return
    setCargando(true)
    try {
      const res = await fetch(`http://127.0.0.1:8000/buscar?q=${busqueda}`)
      const datos = await res.json()
      onResultados(datos)
    } catch (error) {
      console.error("Error al buscar:", error)
    } finally {
      setCargando(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') buscar()
  }

  return (
    <div className="hero__buscador">
      <span className="hero__buscador-icono">🔍</span>
      <input
        className="hero__buscador-input"
        type="text"
        placeholder="Busca un producto... ej: iPhone 15, Sony WH-1000XM5"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="hero__buscador-btn" onClick={buscar}>
        {cargando ? "Buscando..." : "Buscar ahora"}
      </button>
    </div>
  )
}

export default SearchBar