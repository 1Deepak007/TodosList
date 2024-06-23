const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "1Deepak@",   // my postgresql password
    host:"localhost",
    port:5432,              // can see from pgAdmin4(desktop app) -> PostgreSQL (properties)  
    database:"perntodo"
});

module.exports = pool;