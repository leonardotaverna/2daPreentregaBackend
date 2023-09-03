import { productsModel } from './db/models/products.model.js';


class ProductsManagerMongoDB {
    constructor(path) {
    this.path = path;
    }

    async getProducts() {
        try {
            const products = await productsModel.find({});
            return products;
        } catch (error) {
            return error
        }
    }

    async addProduct(objProd) {
        try {
            const newProduct = await productsModel.create (objProd)
            return newProduct            
        } catch (error) {
            return error
        }
        
        
        // const {title, description, thumbnail, price, code, stock} = objProd;
        // try {
        //     if (!title || !description || !price || !code || !stock) {
        //         console.error('Todos los campos son obligatorios');
        //         return;
        //     }

        //     const products = await this.getProducts()

        //     const id = products.length === 0 ? 1 : products[products.length - 1].id + 1

        //     const existingProduct = await products.find(product => product.code === code);
        //     if (existingProduct) {
        //         console.error('Ya existe un producto con el mismo código');
        //         return;
        //     }

        //     const product = {
        //         id,
        //         title,
        //         description,
        //         price,
        //         thumbnail,
        //         code,
        //         stock,
        //     };

        //     products.push(product)
        //     await promises.writeFile(this.path, JSON.stringify (products))
        //     return product
        // } catch (error) {
        //     return error
        // }
    }

    async getProductById(id) {
        try {
            const product = await productsModel.findById(id)
            return product
        } catch (error) {
            return error
        }
        
        
        
        // try {
        //     const products = await this.getProducts()
        //     const product = products.find(product => product.id === pid);
        //     if (product) {
        //         return product;
        //     } else {
        //         console.error('Not found');
        //     }

        // } catch (error) {
        //     return error
        // }
    }

    async updateProduct(id, objProd) {
        try {
            const product = await productsModel.findOneAndUpdate(id, objProd)
            return product
        } catch (error) {
            return error
        }

        // try {
        //     const products = await this.getProducts()
        //     const productIndex = products.findIndex ((p) => p.id === id)
        //     if (productIndex === -1){
        //         return 'No existe un producto con ese id'
        //     }
        //     const prod = products
        //     [productIndex]
        //     products [productIndex] = {...prod,...objProd, id: prod.id}

        //     await promises.writeFile(this.path, JSON.stringify(products))

        // } catch (error) {
        //     return error
        // }
    }

    async deleteProduct(id) {
        try {
            const deleteProduct = await productsModel.findByIdAndDelete(id)
            return deleteProduct
        } catch (error) {
            return error
        }
        
        
        
    //     try {
    //         const products = await this.getProducts()
    //         const newProductsArray = products.filter ((p) => p.id !== id)
    //         if (newProductsArray === -1){
    //             return 'No existe un producto con ese id'
    //         }

    //         await promises.writeFile(this.path,JSON.stringify(newProductsArray))

    //     } catch (error) {
    //         return error
    //     }
    }
};

const productsManagerMongoDB = new ProductsManagerMongoDB ()

export default productsManagerMongoDB