import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'abc123!',
    database: 'buy-and-sell',
});