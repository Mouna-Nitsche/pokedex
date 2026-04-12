const limitValue = 10;
let offsetValue = 0;

async function getPokemon(loadMore = false) {
    if (loadMore) {
        offsetValue += limitValue;
        console.log("Loading more");
    }

    try {
        // fetching data from the api with defined limitValue and offsetValue. How much and from where on.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitValue}&offset=${offsetValue}`);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        //response is a collection of objects limit 10 = 10 objects
        const responseAsJson = await response.json();
        console.log(responseAsJson);

        //results is a key and an array with objects. Structur = name:url
        // p stands for one pokemon, map method creates a new array
        // async returns the promise before the data
        const mappedPokemonList = responseAsJson.results.map(async (p) => {
            const responsePokemon = await fetch(p.url)
            const responsePokemonAsJson = await responsePokemon.json();

            console.log(responsePokemonAsJson);
            return responsePokemonAsJson
        });

        //providing access outside the block scope
        //wait until all promises are resolved
        pokemonList = await Promise.all(mappedPokemonList)

        for (let i = 0; i < pokemonList.length; i++) {
            //varibale instead of passing the index
            let pokemon = pokemonList[i];
            const types = GetPokeType(pokemon)
            document.getElementById("content").innerHTML += generateSinglePokemon(pokemon, types)
            console.log(pokemon.types);
        }

    } catch (error) {
        console.error(error.message);
    }
}


function GetPokeType(pokemon) {

    //Variable defined without a value to avoid definition errors
    let type1;
    let type;
    let noType;

    if (pokemon.types.length === 2) {
        //type, denn im Template nutzen.
        type1 = pokemon.types[1].type.name;
    } else if (pokemon.types.length === 1) {
        type = pokemon.types[0].type.name;
    } else if (pokemon.types.length === 0) {
        noType = ("This Pokemon has no type");
    }


    // typeResult = []; kein pushen mehr
    // console.log(typeResult)

    // return typeResult

}
