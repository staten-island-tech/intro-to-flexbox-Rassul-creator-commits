const fruits = [
  {
    fruit: "strawberry",
    price: 5,
    quantity: 20,
    inStock: true,
    img: "https://assets.bonappetit.com/photos/58dbf6c8a6614f6f50816994/1:1/w_2594,h_2594,c_limit/20170323%20MOB6231_FINAL_crop.jpg",
    alt: "Strawberry",
  },
  {
    fruit: "Melon",
    price: 3,
    quantity: 20,
    inStock: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGl78lIQHr6EKhCtcC4klLJsBqkknqkMmWUQ&s",
    alt: "Melon",
  },
  {
    fruit: "Watermelon",
    price: 4,
    quantity: 20,
    inStock: true,
    img: "https://www.lovefoodhatewaste.com/sites/default/files/styles/twitter_card_image/public/2022-07/Melon-sh1199412217.jpg.webp?itok=6kmowloM",
    alt: "Watermelon",
  },
  {
    fruit: "Kiwi",
    price: 5,
    quantity: 20,
    inStock: true,
    img: "https://www.dole.com/sites/default/files/media/2025-01/kiwi.png",
    alt: "Kiwi",
  },
  {
    fruit: "Apple",
    price: 6,
    quantity: 20,
    inStock: true,
    img: "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
    alt: "apple",
  },
  {
    fruit: "Blackberry",
    price: 7,
    quantity: 20,
    inStock: true,
    img: "https://cdn.shopify.com/s/files/1/0620/1812/6021/files/blackberry-bush.jpg?v=1727827691",
    alt: "Blackberry",
  },
  {
    fruit: "Raspberry",
    price: 8,
    quantity: 20,
    inStock: true,
    img: "https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/willamette-raspberry-bush-2-gallon.jpg?v=1729717126",
    alt: "Raspberry",
  },
  {
    fruit: "Mango",
    price: 9,
    quantity: 20,
    inStock: true,
    img: "https://exoticfruitbox.com/wp-content/uploads/2015/10/mango.jpg",
    alt: "mango",
  },
  {
    fruit: "Pomegranate",
    price: 10,
    quantity: 20,
    inStock: true,
    img: "https://hips.hearstapps.com/hmg-prod/images/pomegranate-benefits-66c74530a5ffb.jpg?crop=0.752xw:0.499xh;0.152xw,0.188xh&resize=1200:*",
    alt: "Pomegranate",
  },
  {
    fruit: "Peach",
    price: 11,
    quantity: 20,
    inStock: true,
    img: "https://www.dole.com/sites/default/files/styles/1024w768h-80/public/media/2025-01/peaches.png?itok=Afx3kROW-hZJLPzgQ",
    alt: "Peach",
  },
  {
    fruit: "Persimmon",
    price: 12,
    quantity: 20,
    inStock: true,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG9eGozcGXl_Sbv75ih7v9kIWDarLWVRikFHDTm97TUP4SO3vdQt5hkyQUcbRm0JMoAXOh3zLfrchJp58JsCPBD4kri-llpYSw17q2Y847UuLbbtYcr9rdTIu_49buwqTAWGfZakVktUI/s1600/04persimmon_sm.png",
    alt: "Persimmon",
  },
  {
    fruit: "Pineapple",
    price: 13,
    quantity: 20,
    inStock: false,
    img: "https://asian-veggies.com/cdn/shop/products/71_qAJehpkL.jpg?v=1668222481",
    alt: "Pineapple",
  },
];
function inject() {
  const container = document.querySelector(".container");
  fruits.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="display-card" data-title="${item.fruit}">
            <img src="${item.img}" alt="${item.alt}" width="150" />
            <h2>${item.fruit}</h2>
            <p>Price: ${item.price} </p>
            <p>Quanitity: ${item.quantity}</p>
            <button>Add to Cart</button>
        </div>
        `
    );
  });
}

function addtoCart() {
  const buttons = document.querySelectorAll(".display-card button");
  const btnArray = buttons;
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const fruitCard = event.target.closest(".display-card");
      const fruitName = fruitCard?.getAttribute("data-title");
      console.log("Button clicked:", event.target.textContent);
      console.log("Fruit:", fruitName);
    })
  );
  let totalPrice = 0;
  fruits.forEach((button) => (totalPrice = totalPrice + price));
  console.log(totalPrice);
}
inject();
addtoCart();
