import pokemon from "./pokemon";
import Pokecard from "./Pokecard";

const Pokedex = (({pokemonList=pokemon}) => {
    return (
        <div className="Pokedex">
            {pokemonList.map((pokez) => <Pokecard pokemon={pokez}/>)}
        </div>
    );
});

export default Pokedex;