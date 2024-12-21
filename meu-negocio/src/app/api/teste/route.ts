import { NextResponse } from 'next/server';
import pool from '../../../../services/db';

export async function GET() {
  try {
    console.log('teste1')
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('teste2')

    return NextResponse.json({ success: true, result: rows });
  } catch (error) {
    console.error('Erro na conexão com o banco:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
