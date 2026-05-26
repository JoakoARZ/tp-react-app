# TP6 React — Prácticas Profesionalizantes II

Aplicación React desarrollada como Trabajo Práctico N°6 de la materia **Prácticas Profesionalizantes II: Programador Junior**.

## 📸 Descripción

Aplicación React funcional con múltiples componentes interactivos que demuestra los fundamentos del framework:

- **Componentes reutilizables** con props y destructuring
- **Estado local** con `useState`
- **Eventos del usuario** (clicks, inputs, formularios)
- **Renderizado condicional**
- **Listas dinámicas** con `.map()` y `key`

## 🧩 Componentes

| Componente | Descripción | Punto |
|---|---|---|
| `Header.jsx` | Navbar con título y links de navegación | 1 |
| `Footer.jsx` | Pie de página con año dinámico | 1 |
| `Card.jsx` | Card reutilizable con props (titulo, descripcion, imagen, precio) | 2 |
| `Contador.jsx` | Contador interactivo con estados visual por color | 3 |
| `ContactForm.jsx` | Formulario controlado con preview en tiempo real | 4 |
| `ProductList.jsx` | Lista filtrable por categoría y stock | 5 |
| `TodoApp.jsx` | To-Do App con CRUD completo | 6 |

## 🛠 Tecnologías

- **React 18** — Librería de UI
- **Vite** — Build tool ultrarrápido
- **CSS Modules / CSS puro** — Estilos con variables CSS (`--color-*`, `--radius-*`)

## 🚀 Instrucciones de uso

### 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd tp6-react
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Correr en modo desarrollo

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`

### 4. Build para producción

```bash
npm run build
```

## 📋 Funcionalidades

### ✅ Punto 2 — Cards reutilizables
- Acepta `titulo`, `descripcion`, `imagen`, `precio`, `categoria`, `enStock` y `children`
- Muestra badge de categoría y estado de stock
- Hover effect con sombra y zoom en imagen

### ✅ Punto 3 — Contador
- Botones +1, -1 y Reset
- Botón -1 deshabilitado en 0
- Color verde (positivo) / rojo (en cero)

### ✅ Punto 4 — Formulario controlado
- Campos nombre, email y mensaje con `useState`
- Preview en tiempo real de los datos ingresados
- Botón de envío deshabilitado si hay campos vacíos
- `e.preventDefault()` + log en consola

### ✅ Punto 5 — Lista de productos
- 8 productos con id, nombre, precio, categoria, enStock
- Filtro por categoría con `<select>`
- Checkbox "Solo en stock"
- Ambos filtros combinados
- Mensaje "No hay productos" cuando no hay resultados

### ✅ Punto 6 — To-Do App
- Agregar tareas (input + Enter o botón)
- No permite tareas vacías
- Toggle completada con spread operator
- Eliminar tarea con `.filter()`
- Contador dinámico de pendientes
- Mensaje "No hay tareas" cuando está vacío
- Tachado CSS en tareas completadas
