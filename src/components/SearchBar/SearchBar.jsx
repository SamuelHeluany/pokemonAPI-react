import './SearchBar.css'
import api from '../../services/api'
import Logo from '../../assets/Pokelogoo.png'
import Search from '../../assets/Search.svg'
import { useRef, useState } from 'react'
import PokemonsCharacters from '../PokemonsCharacters/PokemonsCharacters'

export const SearchBar = () => {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState({
    name: '',
    attack: '',
    defense: '',
    speed: '',
    hp: '',
    category: '',
    image: ''
  })

  const handlePokemonName = (e) => {
    setPokemonName(e.target.value)
  }

  const searchPokemon = async () => {
    if(!pokemonName) {
      alert('Nome do pokemon não informado')
      return
    }

    try {
      const response = await api.get(`/pokemon/${pokemonName.toLowerCase()}`)
    setPokemonInfo({
      name: response.data.name,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      speed: response.data.stats[5].base_stat,
      hp: response.data.stats[0].base_stat,
      category: response.data.types[0].type.name,
      image: response.data.sprites.other.dream_world.front_default,
    })
    console.log(pokemonInfo)
    } catch (error) {
      alert('Nome do pokemon inexistente!', error)
    }
  }

  return (
    <>
    <div className='pokemonLogo'>
        <button className="logo">
            <img src={Logo}/>
        </button>

        <div className='search'>
        <input 
        type="search" 
        name="searchInput" 
        className='searchInput' 
        placeholder='Digite o nome do pokemon'
        value={pokemonName}
        onChange={handlePokemonName}
        />
        <button className='buttonSearch' onClick={searchPokemon}>
            <img src={Search} />
        </button>
        </div>    
    </div>
    {pokemonInfo.name ? (<PokemonsCharacters  
    name={pokemonInfo.name}
    attack={pokemonInfo.attack}
    defense={pokemonInfo.defense}
    speed={pokemonInfo.speed}
    hp={pokemonInfo.hp}
    category={pokemonInfo.category}
    image={pokemonInfo.image}
    />)
  :
  (<></>)
  }
    
    </>
  )
}
