// Componente principal de AppFinder
// Gestiona la navegación entre Login, Registro y la app principal

import { useState, useEffect } from 'react'
import './index.css'
import Login from './components/Login'
import Register from './components/Register'
import Ticker from './components/Ticker'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Trending from './components/Trending'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  // Estado para controlar qué vista se muestra
  const [vista, setVista] = useState('login')

  // Estado para guardar el usuario autenticado
  const [usuario, setUsuario] = useState(null)

  // Al iniciar la app se registra en consola
  useEffect(() => {
    console.log("AppFinder iniciado")
  }, [])

  // Cuando el login es exitoso se guarda el usuario y se muestra la app
  const handleLoginExitoso = (user) => {
    setUsuario(user)
    setVista('app')
  }

  // Mostrar Login
  if (vista === 'login') {
    return (
      <Login
        onIrRegistro={() => setVista('registro')}
        onLoginExitoso={handleLoginExitoso}
      />
    )
  }

  // Mostrar Registro
  if (vista === 'registro') {
    return (
      <Register
        onIrLogin={() => setVista('login')}
      />
    )
  }

  // Mostrar la app principal
  return (
    <div>
      <Ticker />
      <Header usuario={usuario} />
      <Hero />
      <Features />
      <Trending />
      <HowItWorks />
      <Products />
      <CTA />
      <Footer />
    </div>
  )
}

export default App