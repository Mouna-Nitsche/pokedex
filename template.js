function generateSinglePokemon(pokemon, types) {
    return `
                <div class="single_pokemon_card">
                    <div id="card_header" class="card_header_style">                
                        <p># ${pokemon.id}</p>
                        <p>${pokemon.name}</p>
                    </div>
                    <img src=${pokemon.sprites.other.dream_world.front_default} alt="Pic of pokemon" class="poke-img">
                    <div id="card_footer">
                        <p>${types}</p>
                    </div>
                    <div id="allData">

                    </div>
                </div>
            `;
}

function outputApi() {
    return `
            <div id="output_api">

            </div>
    `;
}