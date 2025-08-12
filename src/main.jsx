import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Pokemons } from './components/Pokemons/Pokemons.jsx'
import PokemonsCharacters from './components/PokemonsCharacters/PokemonsCharacters.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokemons />
  },
   {
    path: 'pokemonInfo',
    element: <PokemonsCharacters />
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
