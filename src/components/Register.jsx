// Componente de registro de usuarios
// Se conecta al endpoint /registro de FastAPI que guarda en MySQL

import { useState } from 'react'

function Register({ onIrLogin }) {
  // Estado para los campos del formulario
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')

  // Estado para mensajes de éxito o error
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  // Función que maneja el envío del formulario
  const handleRegistro = async (e) => {
    e.preventDefault()
    setMensaje('')
    setError('')

    // Validar que las contraseñas coincidan
    if (password !== confirmar) {
      setError('Las contraseñas no coinciden.')
      return
    }

    // Validar que ningún campo esté vacío
    if (!nombre || !email || !password) {
      setError('Todos los campos son obligatorios.')
      return
    }

    try {
      // Enviar los datos al endpoint de FastAPI
      const res = await fetch('http://127.0.0.1:8000/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre,
          correo: email,
          contraseña: password
        })
      })

      const data = await res.json()

      if (data.mensaje) {
        setMensaje(data.mensaje)
        setNombre('')
        setEmail('')
        setPassword('')
        setConfirmar('')
      } else {
        setError(data.error)
      }
    } catch (err) {
      setError('No se pudo conectar al servicio web.')
    }
  }

  return (
    <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"var(--bg)"}}>
      <div style={{background:"rgba(92,79,204,0.4)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"20px", padding:"40px", width:"100%", maxWidth:"420px"}}>

        {/* Título */}
        <div style={{textAlign:"center", marginBottom:"32px"}}>
          <div style={{fontFamily:"Syne, sans-serif", fontSize:"28px", fontWeight:"800", color:"var(--texto)"}}>
            App<span style={{color:"var(--naranja)"}}>Finder</span>
          </div>
          <div style={{color:"var(--texto2)", marginTop:"8px", fontSize:"14px"}}>Crea tu cuenta gratis</div>
        </div>

        {/* Mensajes de éxito o error */}
        {mensaje && <div style={{background:"rgba(34,197,94,0.15)", border:"1px solid #22c55e", borderRadius:"10px", padding:"12px", color:"#22c55e", marginBottom:"20px", fontSize:"14px"}}>{mensaje}</div>}
        {error && <div style={{background:"rgba(239,68,68,0.15)", border:"1px solid #ef4444", borderRadius:"10px", padding:"12px", color:"#ef4444", marginBottom:"20px", fontSize:"14px"}}>{error}</div>}

        {/* Formulario de registro */}
        <form onSubmit={handleRegistro}>
          <div style={{marginBottom:"16px"}}>
            <label style={{display:"block", fontSize:"13px", color:"var(--texto2)", marginBottom:"6px"}}>Nombre completo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              style={{width:"100%", background:"rgba(59,45,168,0.5)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"10px", padding:"12px 16px", color:"var(--texto)", fontSize:"14px", outline:"none", fontFamily:"DM Sans, sans-serif"}}
            />
          </div>

          <div style={{marginBottom:"16px"}}>
            <label style={{display:"block", fontSize:"13px", color:"var(--texto2)", marginBottom:"6px"}}>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              style={{width:"100%", background:"rgba(59,45,168,0.5)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"10px", padding:"12px 16px", color:"var(--texto)", fontSize:"14px", outline:"none", fontFamily:"DM Sans, sans-serif"}}
            />
          </div>

          <div style={{marginBottom:"16px"}}>
            <label style={{display:"block", fontSize:"13px", color:"var(--texto2)", marginBottom:"6px"}}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              style={{width:"100%", background:"rgba(59,45,168,0.5)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"10px", padding:"12px 16px", color:"var(--texto)", fontSize:"14px", outline:"none", fontFamily:"DM Sans, sans-serif"}}
            />
          </div>

          <div style={{marginBottom:"24px"}}>
            <label style={{display:"block", fontSize:"13px", color:"var(--texto2)", marginBottom:"6px"}}>Confirmar contraseña</label>
            <input
              type="password"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              placeholder="Repite tu contraseña"
              style={{width:"100%", background:"rgba(59,45,168,0.5)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"10px", padding:"12px 16px", color:"var(--texto)", fontSize:"14px", outline:"none", fontFamily:"DM Sans, sans-serif"}}
            />
          </div>

          <button type="submit" className="btn btn--primario btn--completo">
            Crear cuenta
          </button>
        </form>

        {/* Enlace al login */}
        <div style={{textAlign:"center", marginTop:"20px", fontSize:"14px", color:"var(--texto2)"}}>
          ¿Ya tienes cuenta?{" "}
          <span onClick={onIrLogin} style={{color:"var(--naranja)", cursor:"pointer", fontWeight:"600"}}>
            Inicia sesión
          </span>
        </div>

      </div>
    </div>
  )
}

export default Register