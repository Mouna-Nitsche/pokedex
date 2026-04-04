function generateSinglePokemon(firstPokemonName, pokeImg, pokeId, type) {
    return `
                <div class="single_pokemon_card">
                    <div id="card_header" class="card_header_style">                
                        <p>#${pokeId}</p>
                        <p>${firstPokemonName}</p>
                    </div>
                    <img src=${pokeImg} alt="Pic of pokemon" class="poke-img">
                    <div id="card_footer">
                        <p>${type}</p>
                    </div>
                    <div id="allData">

                    </div>
                </div>
            `;
}