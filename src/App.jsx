import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import DietPlans from './components/DietPlans'
import WhyTatva from './components/WhyTatva'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Programs />
      <DietPlans />
      <WhyTatva />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
