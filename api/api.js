const router = require("express").Router()
const Orders = require("./models/order")
const parser = require("body-parser").json();

router.get("/", async (req, res) => {
    const data = await Orders.find({})
    res.json(data)
})
router.post("/", parser, async (req, res) => {
    await Orders(req.body).save();
    res.json({"msg": "ok"})
})

module.exports = router;