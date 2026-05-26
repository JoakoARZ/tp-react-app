import './Card.css'

function Card({
  titulo,
  descripcion,
  imagen,
  precio = null,
  categoria = null,
  enStock = true,
  children
}) {
  return (
    <div className={`card ${!enStock ? 'card--sin-stock' : ''}`}>
      {imagen && (
        <div className="card-img-wrap">
          <img src={imagen} alt={titulo} className="card-img" />
          {!enStock && <span className="card-badge card-badge--agotado">Sin stock</span>}
          {categoria && <span className="card-badge card-badge--cat">{categoria}</span>}
        </div>
      )}
      <div className="card-body">
        <h3 className="card-titulo">{titulo}</h3>
        {descripcion && <p className="card-desc">{descripcion}</p>}
        {precio !== null && (
          <p className="card-precio">
            ${Number(precio).toLocaleString('es-AR')}
          </p>
        )}
        {children && <div className="card-children">{children}</div>}
      </div>
    </div>
  )
}

export default Card
