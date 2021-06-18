const db = require("mongoose"),
      user = process.env.username || "VariKX",
      password = process.env.userPassword || "qwerty123",
      uri = `mongodb+srv://${user}:${password}@cluster0.jlwsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;