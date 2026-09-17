import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Initialize EmailJS (replace with your public key)
      emailjs.init('YOUR_PUBLIC_KEY')

      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        language: formData.language,
        message: formData.message,
        to_email: 'info@academialingua.es',
      })

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', language: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Error al enviar el mensaje. Por favor, intenta de nuevo.')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Clase de Prueba Gratuita</span>
          <h2>¿Empezamos?</h2>
          <p>Cuéntanos qué idioma te interesa y te contactamos para tu primera clase, sin compromiso.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal">
            <div className="info-item">
              <div>
                <h4>Teléfono</h4>
                <p>+34 XXX XXX XXX</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>Email</h4>
                <p>info@academialingua.es</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>Ubicación</h4>
                <p>Calle Recogidas, 45<br />Granada, 18002 España</p>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            {success && (
              <div className="form-success">
                ✓ Mensaje enviado correctamente. Te contactaremos pronto.
              </div>
            )}
            {error && <div className="form-error">✗ {error}</div>}

            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
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
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="language">Idioma que te interesa *</label>
              <select id="language" name="language" value={formData.language} onChange={handleChange} required>
                <option value="">Selecciona un idioma...</option>
                <option value="ingles">Inglés</option>
                <option value="frances">Francés</option>
                <option value="aleman">Alemán</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos tu nivel actual o cualquier duda que tengas"
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Enviando...' : 'Reservar clase de prueba'}
            </button>
            <p className="form-note">* Campos obligatorios</p>
          </form>
        </div>
      </div>
    </section>
  )
}
