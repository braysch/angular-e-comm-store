const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    date: Date,
    items: [any],
    status: Number,
});
const Order = mongoose.model('orders', orderSchema);
module.exports = Order;