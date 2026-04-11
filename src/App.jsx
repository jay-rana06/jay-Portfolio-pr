import React from 'react'
import Home from './Pages/Home/Home'
import Header from './components/Header'
import  "./App.css"
import Hero from './components/Hero'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Home/>
      <Header/>
      <main>
        <Hero/>
      </main>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default App
