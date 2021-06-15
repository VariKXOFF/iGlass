const express = require("express"),
	  parser = require("body-parser").json(),
	  lessMiddleware = require("less-middleware")
	  app = express();

app.use(express.urlencoded(true));
app.use(express.json());
app.use(parser);
app.use(express.static("./public"));
app.use("/", require("./server/router"));
app.use(lessMiddleware(__dirname + '/public'));


app.set("view engine", "pug");
app.set("views", "./server/templates");

app.listen(5000);