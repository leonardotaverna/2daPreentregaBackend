import { Router } from "express";
//import productsManager from '../ProductsManager.js'
import productsManagerMongoDB from "../ProductsManagerMongoDB.js";
import fs from 'fs';
import __dirname from '../utils.js';


const router = Router()

//getProducts()
router.get('/', async (req, res) => {
    try {
        const{limit,page} = req.query;
        const products = await productsManagerMongoDB.getProducts(limit, page)
        // const { limit } = req.query
        // let limitedProds;
        // if (!limit) {
        //     limitedProds = products
        // } else {
        //     limitedProds = products.slice(0, limit);
        // }
        //res.status(200).json({ message: 'Products', products: limitedProds })
        res.status(200).json({ message: 'Products', products })
        //console.log('filtered products:', limitedProds);
        console.log('Products', products);
    } catch (error) {
        res.status(500).json({ error })
    }
});

//getProducById()
router.get('/:pid', async (req, res) => {
    const { pid } = req.params;
    console.log('requested Prod ID:', pid);
    try {
        const product = await productsManagerMongoDB.getProductById(pid)
        res.status(200).json({ message: 'Product find', product })
    } catch (error) {
        res.status(500).json({ error })
    }
});

//addProduct()
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const newProduct = await productsManagerMongoDB.addProduct(req.body);
        res.status(200).json({ message: 'Product Added', product: newProduct })

    } catch (error) {
        res.status(500).json({ error })
    }
}
);

//updateProduct()
router.put('/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const productUpdated = await productsManagerMongoDB.updateProduct(pid, req.body)
        res.status(200).json({ message: 'Product updated', productUpdated })
    } catch (error) {
        res.status(500).json({ error })
    }
});

//deleteProduct()
router.delete('/:pid', async (req, res) => {
    const { pid } = req.params
    try {
        const deletedProduct = await productsManagerMongoDB.deleteProduct(pid)
        res.status(200).json({ message: 'Product deleted', deletedProduct })
    } catch (error) {
        res.status(500).json({ error })
    }
});

/*//agregar productos del .json
const path = __dirname + '/Products.json'
router.get('/add', async (req, res) => {
    const productData = await fs.promises.readFile(path, 'utf-8')
    await productsManagerMongoDB.addProduct(JSON.parse(productData))
    res.json({ message: 'Products added' })
})*/


export default router;
