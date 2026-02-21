import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Activities from './pages/Activities'
import ActivityDetail from './pages/ActivityDetail'
import Footer from './components/Footer'
import HackingGame from './components/HackingGame'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    // Disable automatic scroll restoration by the browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cyber-dark text-gray-100 font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actividades" element={<Activities />} />
            <Route path="/actividades/:id" element={<ActivityDetail />} />
          </Routes>
        </main>
        <HackingGame />
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
