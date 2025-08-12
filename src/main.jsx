import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Pokemons } from './components/Pokemons/Pokemons.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokemons />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
