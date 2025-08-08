import './PokemonsCharacters.css'
import Category from '../../assets/category.svg'
import Attack from '../../assets/sword.svg'
import Shield from '../../assets/shield.svg'
import Speed from '../../assets/speed.svg'
import Hp from '../../assets/hp.svg'


const PokemonsCharacters = ( {name, attack, defense, speed, hp, category, image} ) => {

  return (
      <div className="pokemon">
          <div className="pokemon-stats">
            <ul>
            <li>Nome: {name}</li>
            <li><img src={Attack} />Ataque: {attack}</li>
            <li><img src={Shield} />Defesa: {defense}</li>
            <li><img src={Speed} />Velocidade: {speed}</li>
            <li><img src={Hp} />Vida: {hp}</li>
            <li><img src={Category} />Categoria: {category}</li>
            </ul>
            
          </div>
        
        <div className="pokemon-image">
            <img src={image}/>
        </div>
        </div>
  )
}

export default PokemonsCharacters