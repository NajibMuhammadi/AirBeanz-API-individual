import {productDb} from '../models/productModel.js';
export default class ProductController {
    // URL =  api/products
    //ALLA PRODUKTER
    getAllProducts = async (req, res, next) => {
        res.status(200).json({
            success: true,
            message: 'Products found.',
            status: 200,
            products: req.products
        });
    }
    
    // ENSKILD PRODUKT PÅ ID
    // URL =  api/products/:productId
    getProduct = async (req, res) => {
        res.status(200).json({
            success: true,
            message: 'Product found.',
            status: 200,
            product: req.product
        });
    }

    // Lägg till en ny produkt

    addNewProduct = async (req, res) => {
        try {
            let newProduct = req.body;

            const productAlreadyExits = await productDb.findOne({ _id: newProduct._id});
            if (productAlreadyExits) {
                return res.status(400).json({
                    success: false,
                    message: 'Product already exists.',
                    status: 400
                });
            }

            const productCount = await productDb.count({});
            const newProductId = productCount + 1;
            newProduct.id = newProductId;
    
            newProduct.addedAt = new Date().toLocaleString();
            const addedProduct = await productDb.insert(newProduct);           

            const productToAdd = {
                id: addedProduct.id,
                _id: addedProduct._id,
                addedAt: addedProduct.addedAt
            };

            res.status(200).json({
                success: true,
                status: 200,
                message: 'Product added',
                product: productToAdd
            });

        }catch (error) {
            res.status(404).json({
                success: false,
                status: 404,
                message: 'Product not added',
                error: error.message
            });
        }
    }
    deleteProduct = async (req, res) => {
        try {
            const productToDelete = req.product;
            const deletedProduct = await productDb.remove({ _id: productToDelete._id }, {});

            if (deletedProduct === 0) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: 'Product not found',
                    product: productToDelete
                });
            }

            res.status(200).json({
                success: true,
                status: 200,
                message: 'Product deleted',
                product: deletedProduct
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                status: 500,
                message: 'Product not deleted',
                error: error.message
            });
        }
    }
    modifyProduct = async (req, res) => {
        try {
           
            const { productId } = req.params;
            const updates = req.body;

            updates.modifiedAt = new Date().toLocaleString();

            const updatedProduct = await productDb.update(
                { _id: productId },
                { $set: updates },
                { new: true });

            if (!updatedProduct) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: 'Product not found',
                    product: updatedProduct
                });
            }
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Product updated',
                product: updatedProduct
            });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    status: 500,
                    message: 'Product not updated',
                    error: error.message
                });
        }    
    }
}

