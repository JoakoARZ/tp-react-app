import { useState } from 'react'
import './ContactForm.css'

const estadoInicial = { nombre: '', email: '', mensaje: '' }

function ContactForm() {
  const [form, setForm] = useState(estadoInicial)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (enviado) setEnviado(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', form)
    setEnviado(true)
    setForm(estadoInicial)
  }

  const formularioValido =
    form.nombre.trim() !== '' &&
    form.email.trim() !== '' &&
    form.mensaje.trim() !== ''

  return (
    <div className="contact-layout">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="form-input"
            placeholder="Tu nombre completo"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="tu@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-textarea"
            placeholder="Escribí tu mensaje acá..."
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formularioValido}
          style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
        >
          ✉ Enviar mensaje
        </button>

        {enviado && (
          <div className="contact-success">
            ✅ ¡Mensaje enviado! Revisá la consola del navegador.
          </div>
        )}
      </form>

      {/* PREVIEW EN VIVO */}
      <div className="contact-preview">
        <p className="preview-title">Vista previa en tiempo real</p>
        <div className="preview-card">
          <div className="preview-row">
            <span className="preview-key">Nombre</span>
            <span className="preview-val">
              {form.nombre || <em>sin completar</em>}
            </span>
          </div>
          <div className="preview-row">
            <span className="preview-key">Email</span>
            <span className="preview-val">
              {form.email || <em>sin completar</em>}
            </span>
          </div>
          <div className="preview-row preview-row--mensaje">
            <span className="preview-key">Mensaje</span>
            <span className="preview-val">
              {form.mensaje || <em>sin completar</em>}
            </span>
          </div>
          <div className="preview-status">
            {formularioValido
              ? '🟢 Listo para enviar'
              : '🔴 Completá todos los campos'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
