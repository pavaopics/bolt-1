import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Discover from './pages/Discover'
import Selections from './pages/Selections'
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('discover')

  return (
    <div className="app-container">
      {/* Header Fixo */}
      <header className="fixed-header">
        <div className="header-content">
          <h1 className="app-title">Team Cast</h1>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/descobrir" element={<Discover />} />
          <Route path="/selecoes" element={<Selections />} />
          <Route path="/vagas" element={<Jobs />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${activeTab === 'discover' ? 'active' : ''}`}
          onClick={() => setActiveTab('discover')}
        >
          <span className="nav-icon">🔍</span>
          <span className="nav-label">Descobrir</span>
        </button>
        
        <button 
          className={`nav-item ${activeTab === 'selections' ? 'active' : ''}`}
          onClick={() => setActiveTab('selections')}
        >
          <span className="nav-icon">⭐</span>
          <span className="nav-label">Seleções</span>
        </button>
        
        <button 
          className={`nav-item ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          <span className="nav-icon">💼</span>
          <span className="nav-label">Vagas</span>
        </button>
        
        <button 
          className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <span className="nav-icon">👤</span>
          <span className="nav-label">Perfil</span>
        </button>
      </nav>
    </div>
  )
}

export default Navigation
