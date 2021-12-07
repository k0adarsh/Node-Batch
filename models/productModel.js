const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
    minlength: 6,
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = Product = mongoose.model("product", productSchema);