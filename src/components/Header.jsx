import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-logo">⚛</div>
          <h1 className="header-title">CompuEAST</h1>
        </div>
        <nav className="header-nav">
          <a href="#cards">Cards</a>
          <a href="#contador">Contador</a>
          <a href="#formulario">Formulario</a>
          <a href="#productos">Productos</a>
          <a href="#todo">To-Do</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
