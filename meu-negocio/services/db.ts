import mysql from 'mysql2/promise';

// Crie uma conexão com o banco de dados usando variáveis de ambiente
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database:'tatuagem',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
