import { addFood, deleteFoodById, getFood, getFoodById, updateFoodById } from 'controllers';
import { Router } from 'express';

const router = Router();

// Get all food items.
router.get('/food', getFood);

// Get food item by id.
router.get('/food/:id', getFoodById);

// Add food item.
router.post('/food/add', addFood);

// Update a food item.
router.put('/food/:id', updateFoodById);

// Delete a food item.
router.delete('/food/:id', deleteFoodById);

export default router;
