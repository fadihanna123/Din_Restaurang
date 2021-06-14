import { Request, Response } from "express";

import { Food } from "../models";
import { router } from "../config";

// Routes
router.get("/food", async (req: Request, res: Response) => {
  try {
    const getFood = await Food.find({});
    res.json(getFood);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/food/:id", async (req, res) => {
  try {
    const id: string = req.params.id;
    const getFoodById = await Food.find({ _id: id });
    res.json(getFoodById);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/food/add", async (req, res) => {
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
    console.log(err.message);
  }
});

router.put("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    Food.findOneAndUpdate({ _id: id }, req.body);
    res.send({ message: "Changed" });
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("/food/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Food.deleteOne({ _id: id });
    res.send({ message: "Deleted" });
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
