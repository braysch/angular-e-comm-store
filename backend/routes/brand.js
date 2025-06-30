const express = require('express');
const router = express.Router();
const Brand = require('../db/brand');
const { addBrand, updateBrand, deleteBrand } = require('../handlers/brand-handler');

router.post("", async (req, res) => {
    let model = req.body;
    let result = await addBrand(model);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params['id'];
    let result = await updateBrand(id, model);
    res.send(result);
});

router.get("", async (req, res) => {
    let brands = await Brand.find();
    return res.send(brands.map(brand => brand.toObject()));
});

router.get("/:id", async (req, res) => {
    let id = req.params['id'];
    let result = await Brand.findById(id);
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    let id = req.params['id'];
    await deleteBrand(id);
    return res.send({ message: "Brand deleted successfully" });
});

module.exports = router;