import mysql from 'mysql2';
import dotenv from 'dotenv';

// .env dosyasını yükle
dotenv.config();

// MySQL bağlantısını oluştur
const DBconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,  // .env dosyasındaki şifreyi alıyoruz
    database: 'form'
});

// Bağlantıyı başlat
DBconnection.connect((err) => {
    if (err) {
        console.error('DB connection ERROR!: ', err);
        return;
    }
    console.log('DB connection SUCCESSFUL!');
});

export default DBconnection;  // ES Module olarak dışa aktarma
