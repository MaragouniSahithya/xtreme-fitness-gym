import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Trainers from './pages/Trainers/Trainers'
import Programs from './pages/Programs/Programs'
import Membership from './pages/Membership/Membership'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
