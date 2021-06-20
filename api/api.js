const router = require("express").Router();
const parser = require("body-parser").json();
const wbm = require("wbm")

router.post("/", parser, async (req, res) => {
    console.log(req.body);
    wbm.start().then(async () => {
	const phones = ['+79106714095']
	const message = `${req.body}`
	await wbm.send(phones, message)
	await wbm.end()
    }).catch(err => {
        console.log(err)
    })
});
module.exports = router;