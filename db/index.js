const mongodb = require("mongodb");

const db = mongodb
	.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
	.then((d) => {
		return d.db("todos");
	});

module.exports = { db };
