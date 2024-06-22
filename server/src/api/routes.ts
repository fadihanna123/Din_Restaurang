import {
  addFood,
  deleteFoodById,
  getFood,
  getFoodById,
  updateFoodById,
} from '../controllers';
import { Router } from 'express';

const router = Router();

// Get all food items.
router.get<Routes>('/food', getFood);

// Get food item by id.
router.get<Routes>('/food/:id', getFoodById);

// Add food item.
router.post<Routes>('/food/add', addFood);

// Update a food item.
router.put<Routes>('/food/:id', updateFoodById);

// Delete a food item.
router.delete<Routes>('/food/:id', deleteFoodById);

export default router;
