import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const DBconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,  
    database: 'form'
});

DBconnection.connect((err) => {
    if (err) {
        console.error('DB connection ERROR!: ', err);
        return;
    }
    console.log('DB connection SUCCESSFUL!');
});

export default DBconnection;  
