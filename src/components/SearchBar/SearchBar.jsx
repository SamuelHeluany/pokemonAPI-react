import './SearchBar.css'
import Logo from '../../assets/Pokelogoo.png'
import Search from '../../assets/Search.svg'

export const SearchBar = () => {
  return (
    <div className='pokemonLogo'>
        <button className="logo">
            <img src={Logo}/>
        </button>

        <div className='search'>
        <input type="search" name="searchInput" className='searchInput' placeholder='Digite o nome do pokemon' />
        <button className='buttonSearch'>
            <img src={Search} />
        </button>
        </div>
        
    </div>
  )
}
