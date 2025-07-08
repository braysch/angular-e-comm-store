const express = require('express');
const { getNewProudcts, getFeaturedProducts } = require('../handlers/product-handler');
const router = express.Router();

router.get('/home/new-products', async (req, res) => {
    const proudcts = await getNewProudcts();
    res.send(proudcts);
});

router.get('/home/featured-products', async (req, res) => {
    const proudcts = await getFeaturedProducts();
    res.send(proudcts);
});

module.exports = router;