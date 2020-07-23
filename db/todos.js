const { db } = require("./index");

const getTodos = async () => {
	return (await (await db).collection("todos").find({}).toArray()).map(
		({ _id, text, status }) => ({
			id: _id,
			text,
			status,
		})
	);
};
const addTodo = async (newtodo) => {
	return await (await db).collection("todos").insertOne(newtodo);
};
const updateTodo = async (todoid, status) => {
	return await (await db).collection("todos").updateOne(
		{ _id: new mongodb.ObjectID(todoid) },
		{
			$set: {
				status,
			},
		}
	);
};
module.exports = { getTodos, addTodo, updateTodo };
