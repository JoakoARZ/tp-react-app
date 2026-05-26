import { useState } from 'react'
import Card from './Card'
import './ProductList.css'

const PRODUCTOS = [
  { id: 1, nombre: 'Notebook Lenovo IdeaPad', precio: 850000, categoria: 'Electrónica', enStock: true, imagen: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80', descripcion: 'Procesador Intel i5, 16GB RAM, SSD 512GB' },
  { id: 2, nombre: 'Auriculares Sony WH-1000', precio: 180000, categoria: 'Electrónica', enStock: true, imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', descripcion: 'Cancelación de ruido activa, 30h de batería' },
  { id: 3, nombre: 'Zapatillas Nike Air Max', precio: 95000, categoria: 'Ropa', enStock: false, imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', descripcion: 'Running y uso diario, talla 42' },
  { id: 4, nombre: 'Campera Impermeable', precio: 62000, categoria: 'Ropa', enStock: true, imagen: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80', descripcion: 'Resistente al agua, talle M y L disponibles' },
  { id: 5, nombre: 'Teclado Mecánico RGB', precio: 75000, categoria: 'Electrónica', enStock: true, imagen: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&q=80', descripcion: 'Switches Cherry MX, retroiluminación RGB' },
  { id: 6, nombre: 'Mesa de Madera Nórdica', precio: 145000, categoria: 'Hogar', enStock: false, imagen: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', descripcion: 'Mesa ratona estilo escandinavo, 90x50cm' },
  { id: 7, nombre: 'Silla Ergonómica', precio: 230000, categoria: 'Hogar', enStock: true, imagen: 'https://images.unsplash.com/photo-1589042091427-a22d85fd49f9?w=400&q=80', descripcion: 'Soporte lumbar ajustable, brazos regulables' },
  { id: 8, nombre: 'Remera Básica Algodón', precio: 18000, categoria: 'Ropa', enStock: true, imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', descripcion: '100% algodón peinado, tallas XS a XXL' },
]

const CATEGORIAS = ['Todas', ...new Set(PRODUCTOS.map(p => p.categoria))]

function ProductList() {
  const [categoria, setCategoria] = useState('Todas')
  const [soloStock, setSoloStock] = useState(false)

  const productosFiltrados = PRODUCTOS
    .filter(p => categoria === 'Todas' || p.categoria === categoria)
    .filter(p => !soloStock || p.enStock)

  return (
    <div className="product-list">
      <div className="product-filters">
        <div className="filter-group">
          <label className="form-label" htmlFor="cat-select">Categoría</label>
          <select
            id="cat-select"
            className="form-select"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            style={{ width: 'auto', minWidth: '160px' }}
          >
            {CATEGORIAS.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={soloStock}
            onChange={e => setSoloStock(e.target.checked)}
          />
          <span>Solo en stock</span>
        </label>

        <span className="filter-count">
          {productosFiltrados.length} resultado{productosFiltrados.length !== 1 ? 's' : ''}
        </span>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="product-empty">
          <span className="product-empty-icon">🔍</span>
          <p>No hay productos que coincidan con los filtros.</p>
          <button
            className="btn btn-secondary"
            onClick={() => { setCategoria('Todas'); setSoloStock(false) }}
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="cards-grid">
          {productosFiltrados.map(producto => (
            <Card
              key={producto.id}
              titulo={producto.nombre}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
              precio={producto.precio}
              categoria={producto.categoria}
              enStock={producto.enStock}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
