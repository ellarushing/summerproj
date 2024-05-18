// connects database to server

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "rushing8",
    host: "localhost",
    port: 5432,
    database: "createAccount"
});

module.exports = pool;

