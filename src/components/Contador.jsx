import { useState } from 'react'
import './Contador.css'

function Contador() {
  const [count, setCount] = useState(0)

  const incrementar = () => setCount(c => c + 1)
  const decrementar = () => setCount(c => Math.max(0, c - 1))
  const resetear = () => setCount(0)

  const colorClass = count === 0 ? 'contador--cero' : 'contador--positivo'

  return (
    <div className="contador">
      <p className="contador-label">Contador interactivo</p>
      <div className={`contador-display ${colorClass}`}>
        <span className="contador-numero">{count}</span>
        <span className="contador-estado">
          {count === 0 ? 'En cero' : `+${count} unidades`}
        </span>
      </div>
      <div className="contador-botones">
        <button
          className="btn btn-danger"
          onClick={decrementar}
          disabled={count === 0}
        >
          − Restar
        </button>
        <button className="btn btn-secondary" onClick={resetear}>
          ↺ Reset
        </button>
        <button className="btn btn-success" onClick={incrementar}>
          + Sumar
        </button>
      </div>
    </div>
  )
}

export default Contador
