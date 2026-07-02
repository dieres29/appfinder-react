// Componente de inicio de sesión
// Verifica las credenciales contra el servicio web json-server en el puerto 3001

import { useState } from 'react'

function Login({ onIrRegistro, onLoginExitoso }) {
  // Estado para los campos del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Estado para mensajes de éxito o error
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  // Función que maneja el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault()
    setMensaje('')
    setError('')

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      setError('Todos los campos son obligatorios.')
      return
    }

    try {
      // Buscar el usuario en el servicio web por email y contraseña
      const res = await fetch(
        `http://localhost:3001/usuarios?email=${email}&password=${password}`
      )
      const data = await res.json()

      // Si encontró un usuario con esas credenciales
      if (data.length > 0) {
        setMensaje(`Autenticación satisfactoria. Bienvenido, ${data[0].nombre}.`)
        setTimeout(() => {
          onLoginExitoso(data[0])
        }, 1500)
      } else {
        setError('Error en la autenticación. Correo o contraseña incorrectos.')
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
          <div style={{color:"var(--texto2)", marginTop:"8px", fontSize:"14px"}}>Inicia sesión en tu cuenta</div>
        </div>

        {/* Mensajes de éxito o error */}
        {mensaje && <div style={{background:"rgba(34,197,94,0.15)", border:"1px solid #22c55e", borderRadius:"10px", padding:"12px", color:"#22c55e", marginBottom:"20px", fontSize:"14px"}}>{mensaje}</div>}
        {error && <div style={{background:"rgba(239,68,68,0.15)", border:"1px solid #ef4444", borderRadius:"10px", padding:"12px", color:"#ef4444", marginBottom:"20px", fontSize:"14px"}}>{error}</div>}

        {/* Formulario de login */}
        <form onSubmit={handleLogin}>
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

          <div style={{marginBottom:"24px"}}>
            <label style={{display:"block", fontSize:"13px", color:"var(--texto2)", marginBottom:"6px"}}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              style={{width:"100%", background:"rgba(59,45,168,0.5)", border:"1px solid rgba(123,111,232,0.4)", borderRadius:"10px", padding:"12px 16px", color:"var(--texto)", fontSize:"14px", outline:"none", fontFamily:"DM Sans, sans-serif"}}
            />
          </div>

          <button type="submit" className="btn btn--primario btn--completo">
            Iniciar sesión
          </button>
        </form>

        {/* Enlace al registro */}
        <div style={{textAlign:"center", marginTop:"20px", fontSize:"14px", color:"var(--texto2)"}}>
          ¿No tienes cuenta?{" "}
          <span onClick={onIrRegistro} style={{color:"var(--naranja)", cursor:"pointer", fontWeight:"600"}}>
            Regístrate gratis
          </span>
        </div>

      </div>
    </div>
  )
}

export default Login