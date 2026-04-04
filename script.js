async function fetchDataJson() {
    let responsePokemon = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    let responseAll = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0");
    let responseType = await fetch("https://pokeapi.co/api/v2/type/12/")
//pokemon?limit=500&offset=0

    let responseAsText = await responsePokemon.json();


    const firstPokemonName = responseAsText.name;
    const pokeImg = responseAsText.sprites.other.dream_world.front_default
    const pokeId = responseAsText.id
    const type = responseType
    document.getElementById("content").innerHTML = generateSinglePokemon(firstPokemonName, pokeImg, pokeId, type)
    document.getElementById("allData").innerHTML = responseAll;
    console.log(responseAsText);
    console.log(type);
    
    
}