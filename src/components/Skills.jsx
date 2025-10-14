import React, { useEffect, useRef } from 'react'

const Skills = () => {
  const skillCardsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    skillCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'all 0.5s ease'
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Desenvolvimento de aplicações web modernas'
    },
    {
      icon: 'fab fa-react',
      title: 'React',
      description: 'Interfaces de usuário dinâmicas'
    },
    {
      icon: 'fab fa-node-js',
      title: 'Node.js',
      description: 'Backend robusto e escalável'
    },
    {
      icon: 'fab fa-python',
      title: 'Python',
      description: 'Desenvolvimento de soluções complexas'
    }
  ]

  return (
    <section id="habilidades" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="skill-card"
            ref={el => skillCardsRef.current[index] = el}
          >
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
