// React y ReactDOM permiten montar la aplicación en el documento HTML.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Buscamos el elemento raíz del HTML y renderizamos App dentro de él.
// El ! indica a TypeScript que esperamos que ese elemento exista.
// StrictMode activa comprobaciones adicionales durante el desarrollo.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
