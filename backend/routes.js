const express = require("express");
const router = express.Router();
const controller = require("./controller/controller");

// Routes
router.post("/todos", controller.createTodo);
router.get("/todos", controller.getAllTodos);
router.get("/todos/:id", controller.getTodoById);
router.put("/todos/:id", controller.updateTodo);
router.delete("/todos/:id", controller.deleteTodo);

module.exports = router;


















// const express = require('express');

// const {isServerRunning} = require("./controller/controller");
// const {createTodo} = require("./controller/controller");
// const {getAllTodos} = require("./controller/controller");
// const {getTodoById} = require("./controller/controller");
// const {updateTodo} = require("./controller/controller");
// const {deleteTodo} = require("./controller/controller");

// const router = express.Router();

// //==============> ROUTES/POSTGRE REST API <==================
// router.get('/', isServerRunning);        // check server running?
// router.post('/todos', createTodo);                 // create todo
// router.get('/getalltodos', getAllTodos);
// router.get('/gettodobyid/:id', getTodoById);
// router.put('/updatetodo/:id', updateTodo);
// router.delete('/deletetodo/:id', deleteTodo);



// module.exports = router;
















// //==============> ROUTES/POSTGRE REST API <==================
// //get
// app.get("/",(req,res)=>{
//     res.send(`Server is running on port ${port}`)
// })

// //create todo
// app.post("/todos", async(req,res)=>{    // async wait for function to complete
//     try {
//         // console.log(req.body);
//         // res.send("You request have been received successfully.")

//         const {description} = req.body;
//         const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",[description]);      // * is used for getting back data. What data exactly inserted.
//         res.json(newTodo.rows[0]);
//     }
//     catch (err) {
//         console.error(err.message);
//     }
// });

// //get all todos
// app.get('/todos', async(req,res)=>{
//     try {
//         const allTodos = await pool.query("SELECT * FROM todo");
//         res.json(allTodos.rows);
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// })

// //get todo by id
// app.get("/todos/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const todo = await pool.query(`SELECT * FROM todo WHERE todo_id=$1`,[id])
//         // res.json(todo.rows);
//         res.json(todo.rows[0]);
//         console.log(todo.rows[0]);
//     }
//     catch(err) {
//         console.error(err.message);
//     }
// });


// //update todo
// app.put("/todos/:id",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const {description} = req.body;
//         const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id])
//         res.json("Todo was updated successfully");
//     }
//     catch(err){
//         console.error(err.message);
//     }
// })

// //delete todo
// app.delete("/todos/:id",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id])
//         res.json("Todo was deleted successfully");
//     }
//     catch(err){
//         console.error(err.message);
//     }
// })