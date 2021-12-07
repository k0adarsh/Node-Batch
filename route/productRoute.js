const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct);

router
    .route('/:id')
    .get(productController.getProduct)
    //.patch(authControllers.auth, userController.updateUser)

module.exports = router;
