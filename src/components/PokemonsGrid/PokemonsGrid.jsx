import './PokemonsGrid.CSS'
import api from '../../services/api'
import Logo from '../../assets/pokelogoo.png'
import Category from '../../assets/category.svg'
import Attack from '../../assets/sword.svg'
import Shield from '../../assets/shield.svg'
import Speed from '../../assets/speed.svg'
import Hp from '../../assets/hp.svg'
import { useEffect, useState } from 'react'

const PokemonsGrid = ({ pokemonUrl }) => {
    const [pokeInfoCard, setPokeInfoCard] = useState({
        name: '',
        attack: '',
        defense: '',
        speed: '',
        hp: '',
        category: '',
        image: ''
    })

    const pokeCardDetails = async () => {
        console.log('URL chamada:', pokemonUrl)
        const result = await api.get(pokemonUrl)
        setPokeInfoCard({
            name: result.data.name,
            attack: result.data.stats.base_stat,
            defense: result.data.stats.base_stat,
            speed: result.data.stats.base_stat,
            hp: result.data.stats.base_stat,
            category: result.data.types.type.name,
            image: result.data.sprites.other.home.front_default,
        })
        console.log(result.data)
    }


    useEffect(() => {
        pokeCardDetails()
    }, [])

    return (
        <div className="container">
            <div className="pokemonList">
                <div className="pokemonCard">
                    <ul>
                        <li><p className='name'>{pokeInfoCard.name}</p></li>
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