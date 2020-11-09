const charactersList = document.querySelector("#charactersList");
const searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("http://hp-api.herokuapp.com/api/characters");
    let hpCharacters = await res.json();
    displayCharacters(hpCharacters);
    console.log(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
