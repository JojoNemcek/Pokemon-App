// FETCH POKEMON


async function fetchData(){
    try{
        pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resorce!");
        }

        const data = await response.json();

        // Fetch the Image of Pokemon
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.visibility = "visible";

        // Fetch the Type of Pokemon
        const pokemonType = data.types[0].type.name;
        const pokemonTypeUpper = pokemonType[0].toUpperCase() + pokemonType.slice(1);
        const typeElement = document.getElementById("pokemonType");
        typeElement.textContent = `${pokemonTypeUpper} type`;

        const imgTypeElement = document.getElementById("typeSprite");
        
        // Set image of the type
        let imagePath = `img/types/${pokemonType}.png`;
        imgTypeElement.src = imagePath;

        imgTypeElement.style.visibility = "visible";

        const nameOfPokemon = data.name;
        const nameElement = document.getElementById("nameOfPokemon");
        nameElement.textContent = nameOfPokemon.toUpperCase();
    }
    catch(error){
        console.error(error);
    }
}