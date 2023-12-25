const search = document.getElementById("inpurSearch");
const ten = document.querySelector(".name");
const type = document.querySelector(".type");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const biq = document.querySelector(".biq");

search.addEventListener("change", (event) => {
  async function FetchApi() {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${event.ability.value}`
      );
      const data = await result.json();
      ten.innerHTML = data.name;
      type.innerHTML = data.type;
      height.innerHTML = data.height;
      weight.innerHTML = data.weight;
      biq.innerHTML = data.species.url;
    } catch {}
  }
  FetchApi();
});
