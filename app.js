const express = require("express")
const parser = require("body-parser").json()
const lessMiddleware = require("less-middleware")
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded(true));
app.use(express.json());
app.use(parser);
app.use("/", require("./server/router"));
app.use(lessMiddleware(__dirname + '/public/less', {
	dest: __dirname + '/public',
	debug: true,
	force: true
}));
app.use(express.static("./public"));

app.set("view engine", "pug");
app.set("views", "./server/templates");

app.listen(port);