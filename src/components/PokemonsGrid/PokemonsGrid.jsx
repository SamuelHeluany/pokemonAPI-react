import './PokemonsGrid.CSS'
import api from '../../services/api'
import Logo from '../../assets/pokelogoo.png'
import Category from '../../assets/category.svg'
import Attack from '../../assets/sword.svg'
import Shield from '../../assets/shield.svg'
import Speed from '../../assets/speed.svg'
import Hp from '../../assets/hp.svg'
import { useState } from 'react'

const PokemonsGrid = () => {
    const [pokeInfosCard, setPokeInfoCard] = useState({
    name: '',
    attack: '',
    defense: '',
    speed: '',
    hp: '',
    category: '',
    image: ''
    })

    const pokeCardDetails = async () => {
        const result = api.get('')

    }
    return (
        <div className="container">
            <div className="pokemonList">
                <div className="pokemonCard">
                    <ul>
                        <li><p className='name'>Charizard</p></li>
                        <li> <img src={Logo} /></li>
                        <li><p><img src={Attack} />Attack: 50</p></li>
                        <li><p><img src={Shield} />Defesa: 50</p></li>
                        <li><p><img src={Speed} />Velocidade: 50</p></li>
                        <li><p><img src={Hp} />HP: 50</p></li>
                        <li><p><img src={Category} />Categoria: Fantasma</p></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default PokemonsGrid