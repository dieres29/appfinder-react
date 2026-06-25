import { useEffect } from 'react'
import './index.css'
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
  useEffect(() => {
    console.log("AppFinder iniciado")
  }, [])

  return (
    <div>
      <Ticker />
      <Header />
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