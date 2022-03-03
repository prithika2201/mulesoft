const { Pool } = require("pg");

const connectionString = "postgres://postgres:2210@localhost:5432/movies";

const pool = new Pool({
  connectionString,
});

const query = "SELECT * from movies";

pool
  .query(query)
  .then((result) => {
    console.log([...result.rows]);
  })
  .catch((err) => console.log(err));
