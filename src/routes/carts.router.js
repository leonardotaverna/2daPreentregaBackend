import { Router } from "express";
//import cartsManager from "../cartsManager.js";
import cartsManagerMongoDB from "../cartsManagerMongoDB.js";

const router = Router ()

//getCarts()
router.get('/', async (req, res) => {
    try {
        const carts = await cartsManagerMongoDB.getCarts()    
        res.status(200).json({ message: 'Carts', carts })
    } catch (error) {
        res.status(500).json({ error })
    }
});

//getCartById()
router.get ('/:cid', async (req,res) => { 
    const {cid} = req.params
    try {
        const carts = await cartsManagerMongoDB.getCartById(cid)
        res.status(200).json      ({message: 'Carts', carts})
    } catch (error) {
        res.status(500).json ({ error })
        
    }
});

//createCart()
router.post('/', async(req, res) => {
    console.log(req.body);
    try {
        const newCart = await cartsManagerMongoDB.createCart(req.body)
        res.status(200).json({message: 'Cart created', cart:newCart}) 
    } catch (error) {
        res.status(500).json ({ error })    
    }
});

//addProductToCart
router.post ('/:cartId/products/:prodId', async (req,res) => {
    const{cartId, prodId} = req.params
    try {
        const addProductToCart = await cartsManagerMongoDB.addProductToCart(cartId, prodId)
        res.status (200).json ({message:'Cart products', cart:addProductToCart})
    } catch (error) {
        res.status(500).json ({ error }) 
    }
})


export default router;