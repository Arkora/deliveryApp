// const express = require("express")
const express = require("express")

import { createFood } from "../controllers/FoodController";

const router = express.Router();

router.get('/foods');

router.get('/foodByCategory:category')

router.post('/uploadFood')

router.get('/:id')

router.delete('/:id')

router.patch('/:id')

export default router;