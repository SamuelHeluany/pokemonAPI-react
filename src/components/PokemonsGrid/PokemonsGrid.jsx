import './PokemonsGrid.CSS'
import api from '../../services/api'
import Category from '../../assets/category.svg'
import Attack from '../../assets/sword.svg'
import Shield from '../../assets/shield.svg'
import Speed from '../../assets/speed.svg'
import Hp from '../../assets/hp.svg'
import { useEffect, useState } from 'react'

const PokemonsGrid = () => {
    const [pokeInfoCard, setPokeInfoCard] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await api.get('pokemon?limit=21')
                const list = res.data.results

                const details = await Promise.all(
                    list.map((pokemon) => api.get(pokemon.url))
                )
                const pokemonsData = details.map(({ data }) => ({
                    name: data.name,
                    hp: data.stats.find(stat => stat.stat.name === 'hp')?.base_stat ?? 0,
                    attack: data.stats.find(stat => stat.stat.name === 'attack')?.base_stat ?? 0,
                    defense: data.stats.find(stat => stat.stat.name === 'defense')?.base_stat ?? 0,
                    speed: data.stats.find(stat => stat.stat.name === 'speed')?.base_stat ?? 0,
                    category: data.types[0]?.type?.name ?? 'Unknown',
                    image: data.sprites.other['official-artwork'].front_default,
                }))

                setPokeInfoCard(pokemonsData)
                setLoading(false)
            } catch (error) {
                alert('Erro ao buscar pokemon:', error)
                setLoading(false)
            }
        }

        fetchPokemons()
    }, [])

    return (
        <div className="container">
            <div className="pokemonList">
                {pokeInfoCard.map((pokemon, idx) => (
                    <div className="pokemonCard" key={idx}>
                        <ul>
                            <li><p className='name'>{pokemon.name}</p></li>
                            <li> <img src={pokemon.image} /></li>
                            <li><p><img src={Attack} />Ataque: {pokemon.attack}</p></li>
                            <li><p><img src={Shield} />Defesa: {pokemon.defense}</p></li>
                            <li><p><img src={Speed} />Velocidade: {pokemon.speed}</p></li>
                            <li><p><img src={Hp} />HP: {pokemon.hp}</p></li>
                            <li><p><img src={Category} />Categoria: {pokemon.category}</p></li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default PokemonsGrid