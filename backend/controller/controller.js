const pool = require("../db");

// Create todo
const createTodo = async (req, res) => {
    try {
        const { description, status } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, status) VALUES ($1, $2) RETURNING *",
            [description, status]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

// Get all todos
const getAllTodos = async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
};

// Get todo by id
const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

// Update the todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, status } = req.body;
        await pool.query(
            "UPDATE todo SET description = $1, status = $2 WHERE todo_id = $3",
            [description, status, id]
        );
        res.json("Todo was updated successfully");
    } catch (err) {
        console.error(err.message);
    }
};

// Delete todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted successfully");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};




























// const pool = require("../db");
// const port = 7700;
// //==============> ROUTES/POSTGRE REST API <==================
// //get
// const isServerRunning = (req, res) => {
//     res.json({ message: "Server is running on port", port });
//     res.send(`Server is running on port ${port}`)
// }

// //create todo
// const createTodo = async (req, res) => {  // async wait for function to complete
//     try {
//         // console.log(req.body);
//         // res.send("You request have been received successfully.")

//         const { description } = req.body;
//         const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *", [description]);      // * is used for getting back data. What data exactly inserted.
//         res.json(newTodo.rows[0]);
//     }
//     catch (err) {
//         console.error(err.message);
//     }
// }

// //get all todos
// const getAllTodos = async (req, res) => {
//     async (req, res) => {
//         try {
//             const allTodos = await pool.query("SELECT * FROM todo");
//             res.json(allTodos.rows);
//         }
//         catch (error) {
//             console.error(error.message);
//         }
//     }
// }

// //get todo by id
// // app.get("/todos/:id", async (req, res) => );
// const getTodoById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await pool.query(`SELECT * FROM todo WHERE todo_id=$1`, [id])
//         // res.json(todo.rows);
//         res.json(todo.rows[0]);
//         console.log(todo.rows[0]);
//     }
//     catch (err) {
//         console.error(err.message);
//     }
// }


// //update todo
// // app.put("/todos/:id", async (req, res) => {})
// const updateTodo = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
//         res.json("Todo was updated successfully");
//     }
//     catch (err) {
//         console.error(err.message);
//     }
// }

// //delete todo
// // app.delete("/todos/:id", async (req, res) => {})
// const deleteTodo = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
//         res.json("Todo was deleted successfully");
//     }
//     catch (err) {
//         console.error(err.message);
//     }
// }


// module.exports = { isServerRunning, createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo};