const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    shortDescription: String,
    price: Number,
    discount: Number,
    sellingPrice: Number,
    images: [String],
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
    brandId: [{ type: Schema.Types.ObjectId, ref: 'brands' }],
    isFeatured: Boolean,
    isNew: Boolean,
});
const Product = mongoose.model('products', productSchema);
module.exports = Product;