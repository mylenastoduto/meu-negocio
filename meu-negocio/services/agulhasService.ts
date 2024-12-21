import pool from './db';

interface Agulha {
  id: number;
  tipo: string;
  tamanho: string;
  data_validade: string;
  marca: string;
}

export const getAgulhas = async (): Promise<Agulha[]> => {
  const [rows] = await pool.query<Agulha[]>('SELECT * FROM agulhas');
  return rows;
};

export const createAgulha = async (agulha: Omit<Agulha, 'id'>): Promise<void> => {
  const { tipo, tamanho, data_validade, marca } = agulha;
  await pool.query(
    'INSERT INTO agulhas (tipo, tamanho, data_validade, marca) VALUES (?, ?, ?, ?)',
    [tipo, tamanho, data_validade, marca]
  );
};
