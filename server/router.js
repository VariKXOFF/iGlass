const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("index");
});
router.get("/order", (req, res) => {
	res.render('order')
})
router.get("/offer", (req, res) => {
	res.render("offer")
})


module.exports = router;