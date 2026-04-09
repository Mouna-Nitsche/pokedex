async function fetchDataJson(i, myPokedex) {
    //limit fetch
    // let responseAllAsText = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");

    // let responseType = await fetch("https://pokeapi.co/api/v2/pokemon/1/types[]");
    //pokemon?limit=500&offset=0

    // responseAllAsText = await responseAllAsText.json();


    myPokedex = []

    for (let i = 1; i < 12; i++) {
        let responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let responseAsJson = await responsePokemon.json();
        let pokemons = responseAsJson;

        myPokedex.push(pokemons);
        
    }
        console.log("This is the pokedex response: ", myPokedex[1]);


    //Zugriff variable machen wiederholt sich
    const pokeId = myPokedex[1].id;
    const firstPokemonName = myPokedex[1].name;
    const pokeImg = myPokedex[1].sprites.other.dream_world.front_default;

    //types[0] sollte varibale sein und gespeichert werden in einer Variable die im Template ausgegeben werden kann.
    const noType = ("This Pokemon has no type");

    let type = myPokedex[1].types[0].type.name;
    const type1 = myPokedex[1].types[1].type.name;

    if (myPokedex[1].types[0].type.length == 0){
        //type, denn im Template nutzen.
        noType;
    } else if (myPokedex[1].types[0].type.length >= 1) {
        type = myPokedex[1].types[0].type.name;
    }

 


    document.getElementById("content").innerHTML = generateSinglePokemon(firstPokemonName, pokeImg, pokeId, noType, type, type1, i, myPokedex)
    document.getElementById("allData").innerHTML = "x";

    console.log(responseAsJson);
    console.log(responseAllAsText);

}
