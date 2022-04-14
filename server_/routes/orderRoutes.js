import express from 'express'
import { postOrder,getOrders,deleteOrder,getOrder } from '../controllers/orderController.js'

const router = express.Router()

router.get("/",getOrders)
router.get("/:id",getOrder)
router.post("/",postOrder)
router.delete("/:id",deleteOrder)


export default router