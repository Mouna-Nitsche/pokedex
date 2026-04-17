function generateSinglePokemon(pokemon, types) {
    // const pTypes = pokemon.types

    // pTypes.forEach((element) => `<p>${element}</p>`)
    // pTypes.forEach((element) => console.log(element))
    return `
     
                <div class="single_pokemon_card pointer" id="single_pokemon_card" onclick="openDialog()">
                    <div id="card_header" class="card_header_style">                
                        <p># ${pokemon.id}</p>
                        <p>${pokemon.name}</p>
                    </div>
                    <img src=${pokemon.sprites.other.dream_world.front_default} alt="Pic of pokemon" class="poke-img">
                    <div id="card_footer">
                        ${types}
                    </div>
                </div>
            `;

}


function generateDetailView(pokemon, types) {
    return `
                <div id="dialog_wrapper" onclick="clickOutsidePokeCard(event)">
                    <button onclick="closeDialog()"> X </button>
                    <p>
                        Pokemon Dialog Placeholder
                        Hier stehen Infos zum Pokemon.
                    </p>
                    <p>${pokemon.name}</p>
                    <div id="types_card_footer">
                        ${types}
                    </div>
                </div>
        `;
}
