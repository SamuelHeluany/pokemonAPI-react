import './PokemonsGrid.CSS'
import Logo from '../../assets/pokelogoo.png'

const PokemonsGrid = () => {
  return (
    <div className="container">
        <div className="pokemonCard">
            <img src={Logo}/>
        </div>
    </div>
  )
}

export default PokemonsGrid