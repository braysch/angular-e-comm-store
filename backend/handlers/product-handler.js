const Product = require("../db/product");

async function addProduct(model) {
    let product = new Product({
        ...model
    });
    await product.save();
    return product.toObject();
}

async function updateProduct(id, model) {
   await Product.findOneAndUpdate({_id: id}, model);
   return
}

async function getProducts() {
   let products = await Product.find();
    return products.map(product => product.toObject());
}

async function getProductById(id) {
   let product = await Product.findById(id);
   return product.toObject();
}

async function deleteProduct(id) {
   await Product.deleteOne({_id: id});
   return;
}

async function getNewProudcts() {
   let newProudcts = await Product.find({ isNew: true });
   return newProudcts.map(product => product.toObject());
}

async function getFeaturedProducts() {
   let featuredProducts = await Product.find({ isFeatured: true });
   return featuredProducts.map(product => product.toObject());
}

module.exports = {
   addProduct,
   updateProduct,
   getProducts,
   deleteProduct,
   getProductById,
   getNewProudcts,
   getFeaturedProducts,
};