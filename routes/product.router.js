import {Router} from 'express'
import ProductManager from '../classes/ProductManager.js'
const router = Router()
let manager = new ProductManager('productos.json')
let productos = manager.getProducts()

router.get('/',(req,res)=>{
    try{
        const { limit } = req.query
        if(Number(limit)){
            res.json(productos.slice(0,limit))

        }
        else{
            res.json(productos)
        }
    }
    catch(err){
        res.status(500).json({error:err})
    }
})

router.get('/:pid',(req,res)=>{
    try{
        const{ pid } = req.params
        let producto = manager.getProductById(pid)
        res.json(producto)

    }
    catch(err){
        res.status(500).json({error:err})
    }

    

})

router.post('/', async (req,res)=>{
    try{
        let producto = req.body
        const newProduct = await manager.addProduct(producto)
        console.log(newProduct)
        if(newProduct?.error) {

            return res.status(404).json(newProduct.error)
        
        }
        res.status(201).json({message: "Producto agregado correctamente"})
    }
    catch(err){
        res.status(500).json({error:err})
    }

})

router.put('/:pid',async (req,res)=>{
    try{
        let productoModificado = req.body
        res.send(await manager.updateProduct(Number(req.params.pid),productoModificado))
    }
    catch(err){
        res.status(500).json({error:err})
    }    
})

router.delete('/:pid', async (req,res)=>{
    try{
        res.send(await manager.deleteProduct(Number(req.params.pid)))
    }
    catch(err){ console.log("Error:",err)}
    
})
export default router