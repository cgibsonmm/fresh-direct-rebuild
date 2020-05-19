// const db = require('../db')
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      brand: "Fake Brand A",
      productName: "Cool Product 1",
      size: "1000lbs",
      price: 420.69,
      unit: "ea",
      category: "fruit",
      imageUrls: [
        "https://via.placeholder.com/300/09f/fff.png",
        "https://via.placeholder.com/300/0f3/f00.png",
      ],
    },
    {
      brand: "Fake Brand B",
      productName: "Amazing Product 1",
      size: "Serves 10",
      price: 50.0,
      unit: "ea",
      salePrice: "$45.00/ea",
      unitPrice: "$5.00/serving",
      category: "vegetable",
      imageUrls: ["https://via.placeholder.com/300/f6f/000.png"],
    },
  ];
  await Product.insertMany(products);
  console.log("Products have been created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
