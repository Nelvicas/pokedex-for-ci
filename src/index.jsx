
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

ReactDOM.render(<App />, document.getElementById('app'))



/*
import React from 'react'
import { createRoot } from 'react-dom/client'  // ← Import correcto
import App from './App'
import './styles.css'

const container = document.getElementById('app')
const root = createRoot(container)              // ← Crea la raíz React

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/