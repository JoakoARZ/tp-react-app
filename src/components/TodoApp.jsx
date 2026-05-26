import { useState } from 'react'
import './TodoApp.css'

let nextId = 1

function TodoApp() {
  const [input, setInput] = useState('')
  const [tareas, setTareas] = useState([
    { id: nextId++, texto: 'Aprender React con Vite', completada: true },
    { id: nextId++, texto: 'Crear componentes reutilizables', completada: false },
    { id: nextId++, texto: 'Practicar useState y props', completada: false },
  ])

  const pendientes = tareas.filter(t => !t.completada).length

  const agregar = () => {
    if (input.trim() === '') return
    setTareas(prev => [...prev, { id: nextId++, texto: input.trim(), completada: false }])
    setInput('')
  }

  const toggleCompletada = (id) => {
    setTareas(prev => prev.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ))
  }

  const eliminar = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') agregar()
  }

  return (
    <div className="todo-app">
      <div className="todo-header">
        <h2 className="todo-titulo">Mis Tareas</h2>
        <span className="todo-badge">
          {pendientes} pendiente{pendientes !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="todo-input-row">
        <input
          type="text"
          className="form-input"
          placeholder="Agregar nueva tarea..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1 }}
        />
        <button
          className="btn btn-primary"
          onClick={agregar}
          disabled={input.trim() === ''}
        >
          + Agregar
        </button>
      </div>

      {tareas.length === 0 ? (
        <div className="todo-empty">
          <span>📋</span>
          <p>No hay tareas. ¡Agregá una!</p>
        </div>
      ) : (
        <ul className="todo-lista">
          {tareas.map(tarea => (
            <li
              key={tarea.id}
              className={`todo-item ${tarea.completada ? 'todo-item--done' : ''}`}
            >
              <button
                className={`todo-check ${tarea.completada ? 'todo-check--done' : ''}`}
                onClick={() => toggleCompletada(tarea.id)}
                aria-label={tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
              >
                {tarea.completada ? '✓' : ''}
              </button>
              <span className="todo-texto">{tarea.texto}</span>
              <button
                className="todo-eliminar"
                onClick={() => eliminar(tarea.id)}
                aria-label="Eliminar tarea"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {tareas.length > 0 && (
        <div className="todo-footer">
          <span>{tareas.filter(t => t.completada).length} de {tareas.length} completadas</span>
          {tareas.some(t => t.completada) && (
            <button
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}
              onClick={() => setTareas(prev => prev.filter(t => !t.completada))}
            >
              Limpiar completadas
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default TodoApp
