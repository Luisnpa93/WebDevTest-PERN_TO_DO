const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "shinobi39",
    host: "localhost",
    port: 5432, //default port
    database: "perntodo"
});

module.exports = pool;