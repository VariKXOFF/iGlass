const db = require("mongoose"),
      uri = `mongodb+srv://${user}:${password}@cluster0.jlwsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;