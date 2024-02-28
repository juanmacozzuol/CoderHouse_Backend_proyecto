import {Router} from 'express'
import { productService, cartService } from '../services/services.js'
import { chatRenderer } from '../controllers/chat.controller.js'
const router = Router()

router.get('/',async (req,res)=>{
    const { limit,page,query,sort } = req.query
    const productos = await productService.getAllProducts(limit, page, query, sort);

    res.render("products",{productos, user:req.session.user})
})

router.get('/carts/:cid',async (req,res)=>{
    const {cid} = req.params
    const productos = await cartService.getProductsFromCart(cid)
    console.log(productos)
    res.render("cart",{productos})
})

router.get('/chat', chatRenderer)

export default router

