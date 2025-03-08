const nome = document.getElementById("pokeNome");

const tipoCores = {
    fire: {border: "#FF6F61", button: "#FF6F61"},
    water: {border: "#4A90E2", button: "#4A90E2"},
    grass: {border: "#77DD77", button: "#77DD77"},
    electric: {border: "#FFD700", button: "#FFD700"},
    ghost: {border: "#6B5B95", button: "#6B5B95"},
    dragon: {border: "#7038F8", button: "#7038F8"}
};

async function consumoApi() {

    const input = document.getElementById("pokeInput").value.toLowerCase();
    const img = document.getElementById("imgPoke");
    const dex = document.querySelector(".dex");
    const button = document.querySelector("button");

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await res.json();
        const tipo = data.types[0].type.name;
        // console.log(data.name);

        nome.innerHTML = `Number: ${data.id}<br> <br>
        Name: ${data.name}<br> <br>
        Type: ${tipo}`;
        img.src = data.sprites.front_default;
        img.style.display = "block";
        document.body.style.backgroundColor = tipoCores[tipo].border;

        dex.style.borderColor = tipoCores[tipo].border;
        document.getElementById("pokeInput").style.borderColor = tipoCores[tipo].border;
        button.style.backgroundColor = tipoCores[tipo].button;

        
    } catch (error) {
        console.log("erro", error);
    }
}

setTimeout(() => {
    document.getElementById("pokeInput").value = "";
    document.getElementById("pokeInput").focus();
    document.getElementById("pokeInput").style.borderColor = "#FFD700";
    document.getElementById("pokeNome").innerHTML = "";
    document.getElementById("imgPoke").style.display = "none";
    document.body.style.backgroundColor = "";
    document.querySelector(".dex").style.borderColor = "#FFD700";
    document.querySelector("button").style.backgroundColor = "#FFD700";
}, 15000);
// consumoApi('bulbasaur');