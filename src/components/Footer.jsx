import './Footer.css'

function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {año} TP6 React — Prácticas Profesionalizantes II
        </p>
        <p className="footer-tech">
          Hecho con ⚛ React + Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
