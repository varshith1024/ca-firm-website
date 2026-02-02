import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/Services/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Industries from './pages/Industries'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App