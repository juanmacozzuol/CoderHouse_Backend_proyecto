import {Router} from 'express'
import CartManager from '../classes/CartManager.js'
import ProductManager from '../classes/ProductManager.js'
const router = Router()

const cartManager = new CartManager('carritos.json')
const carts = cartManager.getCarts()
const manager = new ProductManager('productos.json')
const products = manager.getProducts()

router.post('/',async (req,res)=>{
    res.send( await cartManager.addCart())
})

router.get('/:cid',(req,res)=>{
    res.send(cartManager.getProducts(req.params.cid))    
})

router.post('/:cid/product/:pid', async (req,res)=>{
   
    const {cid,pid} = req.params
    const checkProduct = manager.getProductById(Number(pid))
    if (checkProduct === 'Not found'){
        res.status(404).json({error:"Producto no presente en la base de datos"})
    }
    res.send(await cartManager.addProductToCart(Number(cid),Number(pid)))
   
})


export default router