const containerPersonajes = document.querySelector(".containerPersonajes")


const characters = fetch("https://rickandmortyapi.com/api/character", {
    method: "GET"
})
.then( res => res.json())
.then( data => {
    data.results.forEach( personaje => {
        const contPersonaje = document.createElement("div");
        contPersonaje.classList.add("personaje");
        const nombre = document.createElement("h2");
        const imagen = document.createElement("img");
        const estado = document.createElement("p");
        const especie = document.createElement("p");
        const genero = document.createElement("p");
        const origen = document.createElement("p");
        const ubicacion = document.createElement("p");

        nombre.textContent = personaje.name;
        imagen.src = personaje.image;
        estado.textContent = personaje.status;
        especie.textContent = personaje.species;
        genero.textContent = personaje.gender;
        origen.textContent = personaje.origin.name;
        ubicacion.textContent = personaje.location.name;

        contPersonaje.appendChild(nombre);
        contPersonaje.appendChild(imagen);
        contPersonaje.appendChild(estado);
        contPersonaje.appendChild(especie);
        contPersonaje.appendChild(genero);
        contPersonaje.appendChild(origen);
        contPersonaje.appendChild(ubicacion);

        containerPersonajes.appendChild(contPersonaje);
    })
})

