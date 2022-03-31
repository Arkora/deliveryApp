import express from "express";
import { createFood,deleteFood,getAllFoods, getById ,updateFood } from "../controllers/foodController.js";

const router = express.Router();

router.get('/', getAllFoods);
router.get('/:id',getById);
router.post('/upload', createFood);
router.get('/category:category');
router.delete('/:id',deleteFood);
router.patch('/:id', updateFood);

export default router;