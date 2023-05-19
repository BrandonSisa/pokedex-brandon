import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import "./style/pokemon.css";
import PokemonCard from '../components/pokedex/PokemonCard';
import "../components/pokedex/style/pokemonCard.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();
  
  const getPercentBar = (stat) => {
    const porcent = (stat * 100) / 255;
    return `${porcent}%`;
  };
  
  const handleClickPokemon = () => {
    Navigate(`/pokedex/${pokemon.id}`);
  };
  
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <div style={{ padding: "1px" }} className='pokemonCard1' onClick={handleClickPokemon}>
        <div className={`pokemon__encabezado bg-lg-${pokemon?.types[0].type.name}`}>
          <section className='pokemon__body'>
            <section className='pokemon__contenedor-card'>
              <img className="pokemon__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </section>
            <section className='pokemon__contenedor'>
             <div className='idYnombre'>
               <h2 className='id'>#{pokemon?.id}</h2>
              <h2 className='name name-pokemon'>{pokemon?.name}</h2>
              </div>
             <div className='idInfo'>
              <h5 className='Wight'>Weight: {pokemon?.weight}</h5>
              <h5 className='Height'>Height: {pokemon?.height}</h5>
                </div>
              <div className='Habi1'>
              <h3 className='type'><spam className='letra'>type</spam> {pokemon?.types.map(type => <div key={type.type.name}><span>{type.type.name}</span></div>)}</h3>
              <h3 className='Habi'><spam className='letra'>Abilities</spam>{pokemon?.abilities.map(ability => <div key={ability.ability.name}><span>{ability.ability.name}</span></div>)}</h3>
              </div>     
            </section>
            <section className='pokemon_stats_tabla'>
              <h2 className='pokemon__title'>Stats</h2>
              <section 
              className='pokemon__stats-info'>
                {pokemon?.stats.map(stat => (
                  <article className='pokemon__stat' key={stat.stat.name}>
                    <div className='pokemon__stat-header'>
                      <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                      <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                    </div>
                    <div className='pokemon__stat-bar'>
                      <div className='pokemon__stat-barGray'>
                        <div className="pokemon__stat-barProgress" style={{ width: getPercentBar(stat.base_stat) }}></div>
                      </div>
                    </div>
                  </article>
                ))}
              </section>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Pokemon;
