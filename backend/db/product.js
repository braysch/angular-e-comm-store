const mongoose = require('mongoose');
const Category = require('./category');
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    shortDescription: String,
    purchasePrice: Number,
    sellingPrice: Number,
    images: [String],
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'categories' }]
});
const Product = mongoose.model('products', productSchema);
module.exports = Category;