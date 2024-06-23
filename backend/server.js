const express = require("express")
const app = express()
const cors = require("cors")
const port = 7700
// const pool = require("./db")
const routes = require("./routes");

//Middleware : When you build a React application that consumes APIs, you might encounter situations where your front-end app (running on http://localhost:3000) needs to make requests to a back-end server (running on http://localhost:5000). Due to the same-origin policy, the browser will block these requests unless the server explicitly allows them through CORS (Cross-Origin Resource Sharing).
app.use(cors());

//for getting data from client side. we have to get data from req.body object, we can bet access to body object using express.json()
app.use(express.json())

//server
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});


app.use("/",routes);
app.get("/", (req, res) => {
    res.send(`Server is running on port ${port}`);
});















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
