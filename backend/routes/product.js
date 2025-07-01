const express = require('express');
const router = express.Router();
const Product = require('../db/product');
const { addProduct, updateProduct, deleteProduct } = require('../handlers/product-handler');

router.post("", async (req, res) => {
    let model = req.body;
    let result = await addProduct(model);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params['id'];
    let result = await updateProduct(id, model);
    res.send(result);
});

router.get("", async (req, res) => {
    let products = await Product.find();
    return res.send(products.map(product => product.toObject()));
});

router.get("/:id", async (req, res) => {
    let id = req.params['id'];
    let result = await Product.findById(id);
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    let id = req.params['id'];
    await deleteProduct(id);
    return res.send({ message: "Product deleted successfully" });
});

module.exports = router;