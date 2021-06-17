const db = require("../db_goose");

const OrderSchema = new db.Schema({
    species: String,
    toning: Number,
    color: String,
    weight: Number,
    format: String,
    width: Number,
    height: Number,
    hole: Number,
    diameter: Number,
    cutout: Number,
    additive: String
});

const Order = db.model("orders", OrderSchema)

module.exports = Order;