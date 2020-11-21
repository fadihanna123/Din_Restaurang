const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const Food = require("./models/model.js");

mongoose.Promise = global.Promise;

// Anslutning till Mongodbdatabasen.
mongoose.connect("mongodb://localhost:27017/dinrestaurang", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/food", async (req, res) => {
  try {
    const getFood = await Food.find({});
    res.json(getFood);
  } catch (err) {
    console.log(err);
  }
});

app.get("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getFoodById = await Food.find({ _id: id });
    res.json(getFoodById);
  } catch (err) {
    console.log(err);
  }
});

app.post("/food/add", async (req, res) => {
  try {
    const FoodModel = new Food();
    FoodModel.title = req.body.title;
    FoodModel.sorts = req.body.sorts;
    FoodModel.price = req.body.price;
    FoodModel.image = req.body.image;
    FoodModel.included = req.body.included;
    await FoodModel.save();
    res.json(FoodModel);
  } catch (err) {
    console.log(err);
  }
});

app.put("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    Food.findOneAndUpdate({ _id: id }, req.body, (err) => {
      if (err) {
        console.log(err.message);
      }
      res.send({ message: "Changed" });
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Food.deleteOne({ _id: id });
    res.send({ message: "Deleted" });
  } catch (err) {
    console.log(err);
  }
});

const port = 5000;
app.listen(port, () => console.log(`Servern startar på port ${port}`));
