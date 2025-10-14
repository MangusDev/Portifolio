import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  return (
    <header>
      <nav>
        <div className="logo" onClick={scrollToTop}>
          Mangus<span>Dev</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Início</a></li>
          <li><a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>Sobre</a></li>
          <li><a href="#habilidades" onClick={(e) => { e.preventDefault(); scrollToSection('habilidades') }}>Habilidades</a></li>
          <li><a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos') }}>Projetos</a></li>
          <li><a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>Contato</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
    </header>
  )
}

export default Header
