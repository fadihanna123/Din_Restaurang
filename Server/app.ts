import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import { Food } from "./models/model";

const app = express();

// Anslutning till Mongodbdatabasen.
mongoose.connect("mongodb://localhost:27017/dinrestaurang", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Inställningar
app.use(express.json());
app.use(cors());

app.get("/food", async (req: Request, res: Response) => {
  try {
    const getFood = await Food.find({});
    res.json(getFood);
  } catch (err) {
    console.log(err.response);
  }
});

app.get("/food/:id", async (req, res) => {
  try {
    const id: string = req.params.id;
    const getFoodById = await Food.find({ _id: id });
    res.json(getFoodById);
  } catch (err) {
    console.log(err.response);
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
    console.log(err.response);
  }
});

app.put("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    Food.findOneAndUpdate({ _id: id }, req.body);
    res.send({ message: "Changed" });
  } catch (err) {
    console.log(err.response);
  }
});

app.delete("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Food.deleteOne({ _id: id });
    res.send({ message: "Deleted" });
  } catch (err) {
    console.log(err.response);
  }
});

const port: number = 5000;
app.listen(port, () => console.log(`Servern startar på port ${port}`));
