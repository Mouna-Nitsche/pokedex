function generateSinglePokemon(firstPokemonName, pokeImg, pokeId, noType, type, type1, i, myPokedex) {
    return `
                <div class="single_pokemon_card">
                    <div id="card_header" class="card_header_style">                
                        <p># ${myPokedex[i].id}</p>
                        <p>${firstPokemonName}</p>
                    </div>
                    <img src=${pokeImg} alt="Pic of pokemon" class="poke-img">
                    <div id="card_footer">
                        <p>${noType}, ${type}, ${type1}</p>
                        <p>"hallo"</p>
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