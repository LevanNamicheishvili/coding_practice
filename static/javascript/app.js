const rightside = document.getElementById("rigth_side_fetch");

const loadProducts = () => {
  const url = `../../data/data.json`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.fruits.forEach((fruit) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <a href = "https://www.pornhub.com/"> <div class="card_img_frame">
            <img src="${fruit.img}">
          </div> </a>
          <h2>${fruit.fruitname}</h2>
          <p>${fruit.price}</p>
        `;
        rightside.appendChild(card);
      });
    })
    .catch((error) => {
      console.log(`Error fetching product data: ${error}`);
    });
};

loadProducts();
