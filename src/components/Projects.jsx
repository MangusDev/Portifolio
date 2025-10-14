import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React e Node.js',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: 'https://github.com/MangusDev'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Aplicativo de gerenciamento de tarefas com Python',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: 'https://github.com/MangusDev'
    }
  ]

  return (
    <section id="projetos" className="projects">
      <h2>Projetos Recentes</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
