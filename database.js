const pgp = require('pg-promise')()



// console.log(process.env.PG_USER);
// console.log(process.env.PG_PASSWORD);
// console.log(process.env.PG_HOST);
// console.log(process.env.PG_PORT);

const cn = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/incode4`

console.log(cn);
// const cn = 'postgres://postgres:Abundamba2020$@localhost:5432/incode4';
// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;