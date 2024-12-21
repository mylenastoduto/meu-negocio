import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'myuser',
      password: process.env.DB_PASSWORD || 'mypassword',
      database: process.env.DB_DATABASE || 'mydatabase',
    });

    const [rows] = await connection.execute('SELECT 1 + 1 AS result');
    connection.end(); // Fecha a conexão manualmente
    return NextResponse.json({ success: true, result: rows });
  } catch (error) {
    console.error('Erro na conexão com o banco:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
