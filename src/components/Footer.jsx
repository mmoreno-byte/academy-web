export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Academia Lingua</h3>
          <p>Inglés, francés y alemán con grupos reducidos y profesorado nativo.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#cursos">Cursos</a>
            </li>
            <li>
              <a href="#metodo">Método</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +34 XXX XXX XXX</p>
          <p>Email: info@academialingua.es</p>
          <p>Granada, España</p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Academia Lingua. Todos los derechos reservados.</p>
        <div className="legal-links">
          <a href="#aviso-legal">Aviso Legal</a>
          <a href="#privacidad">Política de Privacidad</a>
          <a href="#cookies">Política de Cookies</a>
        </div>
      </div>
    </footer>
  )
}
