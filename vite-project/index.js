document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
/*function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${item.name}>
      <h1 class="name">${item.name}</h1>
      <img class="imag" src="${item.img}"/>
      <h2 class="price">${item.price}$</h2>
      <button class="add-btn">Add to Cart</button>
    </div>`
  );
}*/