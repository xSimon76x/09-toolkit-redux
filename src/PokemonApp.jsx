import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, setPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { pokemons, page, isLoading } = useSelector( state => state.pokemons);
  const [ nextPage, setNextPage ] = useState(1);

  useEffect(() => {
    dispatch( getPokemons(nextPage) )
  }, [nextPage])
  
  return (
    <>
        <h1>PokemonApp</h1>

        <hr />
        {
          isLoading && <span> Cargando...</span>
        }

        <ul>
          {
            pokemons && pokemons.map( ({ name }) => (              
                <li key={ name }> { name } </li> 
            ))
          }
        </ul>

        <button onClick={() => setNextPage( (pagge) => pagge+1) } style={{ marginRight: '10px' }}>
          Next
        </button>
        <button onClick={() => setNextPage( (pagge) => pagge-1) }>
          Previous
        </button>

        <hr />

        <span> Page { page } </span>
    </>
  )
}
