import express from "express";
import { createFood } from "../controllers/foodController.js";

const router = express.Router();

router.get('/foods');

router.get('/foodByCategory:category');

router.post('/uploadFood', createFood);

router.get('/:id');

router.delete('/:id');

router.patch('/:id');

export default router;