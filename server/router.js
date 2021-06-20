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

// wbm.start().then(async () => {
// 	const phones = ['+79106714095']
// 	const message = 'Hello there!'
// 	await wbm.send(phones, message)
// 	await wbm.end()
// }).catch(err => {
// 	console.log(err)
// })


module.exports = router;