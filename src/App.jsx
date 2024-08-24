import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
          <Routes>
            <Route path="/:userId" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
            {/* Ajouter d'autres routes ici si nécessaire */}
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
