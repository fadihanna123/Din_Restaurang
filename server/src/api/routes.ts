import { verifyToken } from '@core/controllers/verifyToken';
import {
  addFood,
  deleteFoodById,
  getFood,
  getFoodById,
  updateFoodById,
} from '../controllers';
import { Router } from 'express';
import { getToken } from '@controllers/getToken';

const router = Router();

// Get all food items.
router.get<Routes>('/food', getFood);
router.get<Routes>('/token', getToken);

// Get food item by id.
router.get<Routes>('/food/:id', getFoodById);

// Add food item.
router.post<Routes>('/food/add', verifyToken, addFood);

// Update a food item.
router.put<Routes>('/food/:id', verifyToken, updateFoodById);

// Delete a food item.
router.delete<Routes>('/food/:id', verifyToken, deleteFoodById);

export default router;
