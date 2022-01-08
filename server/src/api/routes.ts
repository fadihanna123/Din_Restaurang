import { addFood, deleteFoodById, getFood, getFoodById, updateFoodById } from 'controllers';
import { Router } from 'express';

const router = Router();

// Routes
router.get("/food", getFood);

router.get("/food/:id", getFoodById);

router.post("/food/add", addFood);

router.put("/food/:id", updateFoodById);

router.delete("/food/:id", deleteFoodById);

export default router;
