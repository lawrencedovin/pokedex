import './Pokecard.css';

const Pokecard = (({pokemon}) => {
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return (
        <div className="Pokecard">
            <h3 className="Pokecard__name">{pokemon.name}</h3>
            <img className="Pokecard__image" src={imageUrl} alt={pokemon.name + ' image'}/>
            <p className="Pokecard__type">Type: {pokemon.type}</p>
            <p className="Pokecard__exp">EXP: {pokemon.base_experience}</p>
        </div>
    );
});

export default Pokecard;