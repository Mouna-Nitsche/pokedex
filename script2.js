const limitValue = 10;
let offsetValue = 0;

async function getPokemon(loadMore = false) {
    if (loadMore) {
        offsetValue += limitValue;
        console.log("Loading more");
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitValue}&offset=${offsetValue}`);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const responseAsJson = await response.json();

        console.log(responseAsJson);
    } catch (error) {
        console.error(error.message);
    }
}