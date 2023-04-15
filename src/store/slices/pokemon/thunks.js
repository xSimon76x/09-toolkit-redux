import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice"


export const getPokemons = ( page = 0) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //TODO realizar peticion

        const { data: { results } } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page }`);
        
        dispatch( setPokemons({
                pokemons: results,
                page
            }) 
        )
    }
}
