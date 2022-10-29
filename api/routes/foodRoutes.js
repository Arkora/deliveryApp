import express from "express";
import { createFood,deleteFood,getAllFoods, getByCategory, getById ,getFoodBySearch,updateFood } from "../controllers/foodController.js";

const router = express.Router();

router.get('/search',getFoodBySearch);
router.get('/', getAllFoods);
router.get('/category/:category',getByCategory);
router.get('/:id',getById);
router.post('/upload', createFood);

router.patch('/:id', updateFood);
router.delete('/:id',deleteFood);

export default router;