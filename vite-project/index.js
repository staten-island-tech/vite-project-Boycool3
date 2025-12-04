document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
const Movies = [
  {
    name: "The Greatest Showman",
    img: "showsh man.jpg",
    Genre1: "Musical",
    Genre2: "Thriller",
    watched: true,
  },
  {
    name: "Spider-Man: Into the Spider-Verse",
    img: " ",
    Genre1: "Family",
    Genre2: "Action",
    watched: true,
  },
  {
    name: "Spider-Man: Across the Spider-Verse",
    img: " ",
    Genre1: "Action",
    Genre2: "Sci-Fi",
    watched: true,
  },
  {
    name: "Black Panther",
    img: " ",
    Genre1: "Action",
    Genre2: "Sci-Fi",
    watched: true,
  },
  {
    name: "Nobody",
    img: " ",
    Genre1: "Action",
    Genre2: "Thriller",
    watched: true,
  },
  {
    name: "El Camino: A Breaking Bad Movie",
    img: " ",
    Genre1: "Thriller",
    Genre2: "Crime",
    watched: false,
  },
  {
    name: "Pulp Fiction",
    img: " ",
    Genre1: "Crime",
    Genre2: "Thriller",
    watched: false,
  },
  {
    name: "The Great Gatsby",
    img: " ",
    Genre1: "Romance",
    Genre2: "Drama",
    watched: false,
  },
  {
    name: "Bohemian Rhapsody",
    img: " ",
    Genre1: "Musical",
    Genre2: "Drama",
    watched: false,
  },
  {
    name: "Piece By Piece",
    img: " ",
    Genre1: "Musical",
    Genre2: "Documentary",
    watched: false,
  },
  {
    name: "The Lego Movie",
    img: " ",
    Genre1: "Family",
    Genre2: "Comedy",
    watched: true,
  },
  {
    name: "The Lego Batman Movie",
    img: " ",
    Genre1: "Family",
    Genre2: "Comedy",
    watched: true,
  },
  {
    name: "Hamilton",
    img: " ",
    Genre1: "Musical",
    Genre2: "Drama",
    watched: true,
  },
  {
    name: "Puss in Boots: The Last Wish",
    img: " ",
    Genre1: "Adventure",
    Genre2: "Comedy",
    watched: false,
  },
  {
    name: "The Wild Robot",
    img: " ",
    Genre1: "Family",
    Genre2: "Sci-Fi",
    watched: false,
  },
]
Movies.forEach((Movie) => inject(Movie));
function inject(item) {
  if(item.watched === true){
  const container = document.querySelector(".containerwatched");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${item.name}>
      <h1 class="name">${item.name}</h1>
      <img class="imag" src="${item.img}"/>
      <h2 class="genre">${item.Genre1}/${item.Genre2}</h2>
    </div>`
  );}
  if(item.watched === false){
  const container = document.querySelector(".containernot");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${item.name}>
      <h1 class="name">${item.name}</h1>
      <img class="imag" src="${item.img}"/>
      <h2 class="genre">${item.Genre1}/${item.Genre2}</h2>
    </div>`
  );}
}