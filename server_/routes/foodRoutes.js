import express from "express";
import { createFood,getAllFoods, getById } from "../controllers/foodController.js";

const router = express.Router();

router.get('/', getAllFoods);

router.get('/category:category');

router.post('/upload', createFood);

router.get('/:id',getById);

router.delete('/:id');

router.patch('/:id');

export default router;