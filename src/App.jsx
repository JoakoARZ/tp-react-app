import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Contador from './components/Contador'
import ContactForm from './components/ContactForm'
import ProductList from './components/ProductList'
import TodoApp from './components/TodoApp'

const CARDS_DEMO = [
  {
    id: 1,
    titulo: 'JavaScript Moderno',
    descripcion: 'Dominá ES6+, async/await, módulos y las últimas features del lenguaje.',
    imagen: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&q=80',
    precio: 29900,
  },
  {
    id: 2,
    titulo: 'React desde Cero',
    descripcion: 'Componentes, hooks, estado y el ecosistema moderno de React.',
    imagen: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&q=80',
    precio: 45000,
  },
  {
    id: 3,
    titulo: 'CSS Avanzado',
    descripcion: 'Flexbox, Grid, animaciones y diseño responsive profesional.',
    imagen: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=400&q=80',
    precio: 22500,
  },
  {
    id: 4,
    titulo: 'Node.js & Express',
    descripcion: 'Backend con Node.js, APIs REST, autenticación y bases de datos.',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
    precio: 55000,
  },
]

function App() {
  return (
    <>
      <Header />

      <main className="main-content">

        {/* ========== PUNTO 2: Cards reutilizables ========== */}
        <section id="cards" className="section">
          <h2 className="section-title">
            Card <span>Reutilizable con Props</span>
          </h2>
          <div className="cards-grid">
            {CARDS_DEMO.map(curso => (
              <Card
                key={curso.id}
                titulo={curso.titulo}
                descripcion={curso.descripcion}
                imagen={curso.imagen}
                precio={curso.precio}
              >
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Ver curso
                </button>
              </Card>
            ))}
          </div>
        </section>

        {/* ========== PUNTO 3: Contador ========== */}
        <section id="contador" className="section">
          <h2 className="section-title">
            Contador <span>con useState</span>
          </h2>
          <Contador />
        </section>

        {/* ========== PUNTO 4: Formulario controlado ========== */}
        <section id="formulario" className="section">
          <h2 className="section-title">
            Formulario Controlado con Preview <span>Controlado con Preview</span>
          </h2>
          <ContactForm />
        </section>

        {/* ========== PUNTO 5: Lista de productos ========== */}
        <section id="productos" className="section">
          <h2 className="section-title">
            Lista de Productos <span>con Filtros</span>
          </h2>
          <ProductList />
        </section>

        {/* ========== PUNTO 6: To-Do App ========== */}
        <section id="todo" className="section">
          <h2 className="section-title">
            To-Do <span>App Completa</span>
          </h2>
          <TodoApp />
        </section>

      </main>

      <Footer />
    </>
  )
}

export default App
