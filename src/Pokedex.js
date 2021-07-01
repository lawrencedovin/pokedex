import pokemon from "./pokemon";
import Pokecard from "./Pokecard";

const Pokedex = (({pokemonList=pokemon}) => {
    return (
        <div className="Pokedex">
            {pokemonList.map((pokemonData) => <Pokecard pokemon={pokemonData}/>)}
        </div>
    );
});

export default Pokedex;