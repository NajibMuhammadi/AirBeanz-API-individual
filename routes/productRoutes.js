import { Router } from 'express';

import authMiddleware from '../middleware/authentication.js';
import validateMiddleware from '../middleware/validation.js';
import ProductController from './../controllers/productController.js';

const router = Router();

const controller = new ProductController();

router.get('/', validateMiddleware.products.many, controller.getAllProducts);

router.get('/:productId', validateMiddleware.products.one, controller.getProduct);

router.post('/',
    authMiddleware.checkUserStrict,
    validateMiddleware.users.isAdmin,
    validateMiddleware.products.addNew,
    controller.addNewProduct
);

router.delete('/:productId',
    authMiddleware.checkUserStrict,
    validateMiddleware.users.isAdmin,
    validateMiddleware.products.one,
    controller.deleteProduct
);

router.put('/:productId',
    authMiddleware.checkUserStrict,
    validateMiddleware.users.isAdmin,
    validateMiddleware.products.addNew,
    controller.modifyProduct
);

export default router;

