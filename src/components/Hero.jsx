import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const codeRef = useRef(null)

  useEffect(() => {
    const codeElement = codeRef.current
    if (!codeElement) return

    const text = codeElement.textContent
    codeElement.textContent = ''

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        codeElement.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    observer.observe(codeElement)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Desenvolvedor Full Stack</h1>
          <p className="subtitle">Transformando desafios em soluções digitais revolucionárias</p>
          <div className="hero-buttons">
            <a href="#contato" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
              Entre em Contato
            </a>
            <a href="#projetos" className="secondary-button" onClick={(e) => { e.preventDefault(); scrollToSection('projetos') }}>
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="code-animation">
          <pre>
            <code ref={codeRef}>
              {`const mangusDev = {
    stack: ['Frontend', 'Backend', 'Mobile'],
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    experience: 'Desenvolvimento de soluções inovadoras'
};`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
