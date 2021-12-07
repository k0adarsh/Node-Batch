const Product = require('../models/productModel')


// Add new product
// Protected Route
exports.addProduct = async (req, res) => {
    try{
        let { productName, productId, price } = req.body;
        if(!productName || ! productId || !price)
            return res.status(400).json({ msg: "Not all fields entered" });
        
        const newProd = new Product({
            productName,
            productId,
            price
        });
        const savedProd = await newProd.save();   
    }catch (err) {
        res.status(400).json({
            status: 'Failed User Creation',
            message: err
        })
    }
}
// Get All Products. 
// Public route.
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status: 'Success',
            results: products.length,
            data: {
                products
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err
        })
    }
}

// Get a Single Product
// Public Route
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            status: 'Success',
            data: {
                product
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'Failed',
            message: err
        })
    }
}