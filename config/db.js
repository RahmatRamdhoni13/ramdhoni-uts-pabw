import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'data_event'
});

db.connect((err) => {
    if (err) throw err;
    console.log("database connected 😃 ");
});

export default db