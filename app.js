const charactersList = document.querySelector("#charactersList");
const searchBar = document.querySelector("#searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchStr = e.target.value.toLowerCase();
  const filteredCharacter = hpCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchStr) ||
      character.house.toLowerCase().includes(searchStr)
    );
  });
  displayCharacters(filteredCharacter);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("http://hp-api.herokuapp.com/api/characters");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
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
