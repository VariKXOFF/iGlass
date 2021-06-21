const router = require("express").Router();
const wbm = require("wbm")
const parser = require("body-parser").json()

router.get("/", (req, res) => {
	res.render("index");
});
router.get("/order", (req, res) => {
	res.render('order')
})
router.get("/offer", (req, res) => {
	res.render("offer")
})

router.post("/offer", parser, async (req, res) => {
	// let data = JSON.parse(req.body)
	console.log(req.body)
	wbm.start().then(async () => {
		const phones = ['+79164175971']
		const message = `${JSON.stringify(req.body)}`
		await wbm.send(phones, message)
		await wbm.end()
	}).catch(err => {
		console.log(err)
	})
})

module.exports = router;