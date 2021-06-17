const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("index");
});
router.get("/order", (req, res) => {
	res.render('order')
})


module.exports = router;