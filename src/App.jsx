import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Activities from './pages/Activities'
import ActivityDetail from './pages/ActivityDetail'
import Footer from './components/Footer'
import HackingGame from './components/HackingGame'

function App() {
  return (
    <HashRouter>
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
        <div className="fixed bottom-2 right-2 z-50 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded opacity-75 pointer-events-none">
          V2.0 - LIVE (18 FEB)
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
