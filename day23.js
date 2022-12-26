let products = [
  {
    product: "🍭",
    price: 2.99,
  },
  {
    product: "🍫",
    price: 0.99,
  },
  {
    product: "🏡",
    price: 40000000,
  },
  {
    product: "🧁",
    price: 0.99,
  },
  {
    product: "📚",
    price: 0.99,
  },
  {
    product: "⏰",
    price: 13.99,
  },
  {
    product: "🍬",
    price: 0.89,
  },
  {
    product: "🥎",
    price: 3.99,
  },
  {
    product: "🎸",
    price: 13.99,
  },
  {
    product: "🎨",
    price: 23.99,
  },
  {
    product: "💕",
    price: 0,
  },
];

function sortProducts(data){
    data
      .map((item) => [ item.product, item.price ])
      .sort((a, b) => a[1] - b[1])
      .forEach(item => console.log(item[0] + ',' + item[1]));
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);
