import React from 'react'

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre</h2>
          <p>Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras. Com experiência em desenvolvimento web e mobile, sempre buscando aprender novas tecnologias e melhorar minhas habilidades.</p>
          <div className="about-stats">
            <div className="stat">
              <span className="number">1+</span>
              <span className="label">Ano de Experiência</span>
            </div>
            <div className="stat">
              <span className="number">5+</span>
              <span className="label">Projetos Concluídos</span>
            </div>
            <div className="stat">
              <span className="number">100%</span>
              <span className="label">Dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
