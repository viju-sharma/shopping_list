const express = require("express");
const axios = require("axios");
const router = express.Router();
//show home page
router.get("/getAllProducts", (req, res) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(404).send("result not found");
    });
});

router.get("/getProductsByHighToLow", (req, res) => {
  let products = [];
  axios
    .get("https://fakestoreapi.com/products")
    .then((result) => {
      products = result.data;
      products.sort((a, b) => {
        return a.price - b.price;
      });
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("result not found");
    });
});

router.get("/getProductsByLowToHigh", (req, res) => {
  let products = [];
  axios
    .get("https://fakestoreapi.com/products")
    .then((result) => {
      products = result.data;
      products.sort((a, b) => {
        return b.price - a.price;
      });
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("result not found");
    });
});

module.exports = router;
