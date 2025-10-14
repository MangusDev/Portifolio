import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const { name, message } = formData
    const mailtoLink = `mailto:dev.mangus@gmail.com?subject=Contato via Portfolio&body=${encodeURIComponent(message)}`
    
    window.location.href = mailtoLink
    
    setFormData({ name: '', email: '', message: '' })
    
    alert('Obrigado! Seu cliente de email será aberto para enviar a mensagem.')
  }

  return (
    <section id="contato" className="contact">
      <h2>Entre em Contato</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>dev.mangus@gmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>(19) 97114-5433</p>
          </div>
          <div className="social-links">
            <a href="https://wa.me/5519971145433" target="_blank" rel="noopener noreferrer" className="social-button whatsapp">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://github.com/MangusDev" target="_blank" rel="noopener noreferrer" className="social-button github">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mangus-dev/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
