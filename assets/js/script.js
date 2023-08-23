let personajes_populares_secundarios = [];
let personajes_significativos = [];
let url_principal = "https://swapi.dev/api/people/?format=json";
let url_personajes_significativos =
  "https://swapi.dev/api/people/?page=2&format=json";

fetch(url_principal)
  .then((res) => res.json())
  .then((data) => {
    let principal = data.results;
    personajes_populares_secundarios.push(principal);

    for (let i = 0; i < personajes_populares_secundarios.length; i++) {
      personaje_principal.innerHTML = `
      <div class="card" style="width: 18rem; height:6rem">
      <div class="card-body">
        <h5 class="card-title">${principal[i].name}</h5>
        <p class="card-text">Estatura: ${principal[i].height} <span>Peso: ${principal[i].mass}</span></p>
      </div>
    </div>
        `;
    }

    console.log(principal);
  });

fetch(url_personajes_significativos)
  .then((res) => res.json())
  .then((data) => {
    let significativo = data.results;
    personajes_significativos.push(significativo);

    for (let i = 0; i < personajes_significativos.length; i++) {
        personaje_significativo.innerHTML = `
        <div class="card" style="width: 18rem; height:6rem">
        <div class="card-body">
          <h5 class="card-title">${significativo[i].name}</h5>
          <p class="card-text">Estatura: ${significativo[i].height} <span>Peso: ${significativo[i].mass}</span></p>
        </div>
      </div>
          `;
      }

    console.log(significativo);
  });




