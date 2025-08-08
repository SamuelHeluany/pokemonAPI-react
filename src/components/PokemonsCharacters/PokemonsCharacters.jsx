import './PokemonsCharacters.css'
import Charm from '../../assets/charm.png'
import Category from '../../assets/category.svg'
import Attack from '../../assets/sword.svg'
import Shield from '../../assets/shield.svg'
import Speed from '../../assets/speed.svg'
import Hp from '../../assets/hp.svg'


const PokemonsCharacters = ( {} ) => {

  return (
      <div className="pokemon">
          <div className="pokemon-stats">
            <ul>
            <li>Nome: Pokemon name</li>
            <li><img src={Attack} />Ataque: 50</li>
            <li><img src={Shield} />Defesa: 50</li>
            <li><img src={Speed} />Velocidade: 50</li>
            <li><img src={Hp} />Vida: 50</li>
            <li><img src={Category} />Categoria: Fantasma</li>
            </ul>
            
          </div>
        
        <div className="pokemon-image">
            <img src={Charm}/>
        </div>
        </div>
  )
}

export default PokemonsCharacters