
import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import "./style/pokedex.css"
import "./style/Home.css"
  const Pokedex = () => {
 
  const nameTrainer = useSelector(store => store.nameTrainer)
    
    const { 
      handleSubmit,
      handleChangeSelect,
      types,
      pokemonsInPage,
      handlePreviusPage,
      handleNextPage,
      pagesInBlock,
      setCurrentPage,

    } = usePokedex();
   return (
    <main className='pokedex '> 
       <p className='home'><span> Bienvenido {nameTrainer}, </span> aqui puedes encontrar informacion sobre tu pokemon favorito

</p>
      <form onSubmit={handleSubmit} className="pokedesx-form">
         <div className='pokedex_orden'> 
          
          
           <div className='div'>
             <input type="text" id="pokemonName" className='input' required />
             <label className='lbl-name input'>
               <span className='text-name'>Encuentra tu pokemnon</span>
             </label>
           </div>
           
           <button className='btn-neon button'>
             <span className='span1' ></span>
             <span className='span2' ></span>
             <span className='span3' ></span>
             <span className='span4' ></span>
             Buscar..
           </button>
         
           {/* <button className='home-btn'> search</button> */}
        {/* </div> */}

        <select onChange={handleChangeSelect} className="pokedex-select">
          <option  value="">Todos</option>
          {
            types.map(type => <option key={type.url}>{type.name}</option>)
          }
         </select>
         </div>
      </form>

      <section className='pokedex_Card rgb'  >
        {
          pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
       
        }
      </section>
       <section >
         <ul className='paginado'>
           <li className='paginado-color '  onClick={handlePreviusPage}>{"<<"}</li >
           <li className='paginado-color ' onClick={()=>setCurrentPage(1)}>...</li >
        { 
             pagesInBlock.map(page => <li className='paginado-color ' onClick={() => setCurrentPage(page)} key={page}>{ page}</li>)
          }
           
           <li className='paginado-color ' onClick={handleNextPage}>{">>"}</li>
        </ul>
      </section>
    </main>
    
    


  )



}

export default Pokedex
