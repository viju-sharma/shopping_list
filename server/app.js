const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const logger = require("morgan");

const app = express();

const productRoute = require("./routes/product");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", productRoute);

app.listen(3001, () => {
  console.log("server is spinning on port 3001");
});
