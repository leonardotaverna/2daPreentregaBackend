import { cartsModel } from './db/models/carts.model.js';

class CartsManagerMongoDB {
    constructor(path) {
        this.path = path;
    }

    async getCarts() {
        try {
            const carts = await cartsModel.find({}).populate('products.product');
            return carts;
        } catch (error) {
            return error
        }


        // try {
        //     if (existsSync(this.path)) {
        //         const data = await promises.readFile(this.path, 'utf-8')
        //         return JSON.parse(data)
        //     } else {
        //         return []
        //     }
        // } catch (error) {
        //     return error
        //}
    };

    async getCartById(cid) {
        try {
            const cart = await cartsModel.findById(cid).populate('products.product')
            return cart
        } catch (error) {
            return error
        }
        
        
        
        
        // try {
        //     const carts = await this.getCarts()
        //     const cart = carts.find(cart => cart.id === cid);
        //     if (cart) {
        //         return cart;
        //     } else {
        //         console.error('Cart Not found');
        //     }

        // } catch (error) {
        //     return error
        // }
    };

    async createCart(obj) {
        try {
            const newCart = await cartsModel.create (obj)
            return newCart          
        } catch (error) {
            return error
        }
        
        // try {
        //     const carts = await this.getCarts()

        //     const id = carts.length === 0 ? 1 : carts[carts.length - 1].id + 1

        //     const newCart = {
        //         products: [], 
        //         id
        //     };

        //     carts.push(newCart)
        //     await promises.writeFile(this.path, JSON.stringify(carts));
        //     return newCart;
        // } catch (error) {
        //     return error
        // }
    };

    async addProductToCart (cartId, prodId){
        const carts = await this.getCarts()
        const cart = carts.find(cart => cart.id === cartId)
        const productIndex = cart.products.findIndex (prod => prod.product === prodId)
        if (productIndex === -1){
            cart.products.push ({product:prodId, quantity:1})
        }else{
            cart.products[productIndex].quantity++
        }
        //await promises.writeFile(this.path,JSON.stringify(carts))
        return cart
    }
};


const cartsManagerMongoDB = new CartsManagerMongoDB ()

export default cartsManagerMongoDB