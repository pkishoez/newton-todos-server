const { Router } = require("express");
const todos = require("../db/todos");

const router = Router();

router.get("/getTodos", async (req, res) => {
	try {
		res.json({
			data: await todos.getTodos(),
		});
	} catch (err) {
		console.log("Error", err);
		res.json({
			error: "Cannot get todos",
		});
	}
});

router.post("/addTodo", async (req, res) => {
	const newtodo = {
		text: req.body.text,

		status: "ACTIVE",
	};
	const data = await todos.addTodo(newtodo);

	if (data.insertedCount > 0) {
		res.send({
			data: { ...newtodo, id: data.insertedId },
		});
	} else {
		res.send({
			error: "Couldn't add",
		});
	}
});
router.post("/toggleTodo", async (req, res) => {
	try {
		const result = await todos.updateTodo(req.body.todoid, req.body.status);
		res.send({
			data: await todos.getTodos(),
		});
	} catch (er) {
		res.send({
			error: "Toggle Todo failed",
		});
	}
});

module.exports = { router };
