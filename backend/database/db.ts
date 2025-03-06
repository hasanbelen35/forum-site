import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const DBconnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

DBconnection.connect((err) => {
    if (err) {
        console.error('DB connection ERROR!: ', err);
        return;
    }
    console.log('DB connection SUCCESSFUL!');
});

export default DBconnection;  