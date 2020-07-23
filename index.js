const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { router: TodosAPI } = require("./routes/todos");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", TodosAPI);

app.listen(2222, () => {
	console.log("Server is listening at : 2222");
});
