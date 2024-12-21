'use client';

import { useState, useEffect } from 'react';

interface Agulha {
  id: number;
  tipo: string;
  tamanho: string;
  data_validade: string;
  marca: string;
}

const AgulhasPage = () => {
  const [agulhas, setAgulhas] = useState<Agulha[]>([]);
  const [newAgulha, setNewAgulha] = useState({
    tipo: '',
    tamanho: '',
    data_validade: '',
    marca: '',
  });

  useEffect(() => {
    const fetchAgulhas = async () => {
      const res = await fetch('/api/agulhas');
      console.log("olá resposta",res)
      const data = await res.json();
      setAgulhas(data);
    };
    fetchAgulhas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/agulhas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAgulha),
    });
    setNewAgulha({ tipo: '', tamanho: '', data_validade: '', marca: '' });
    const res = await fetch('/api/agulhas');
    const data = await res.json();
    setAgulhas(data);
  };

  return null
  return (
    <div>
      <h1>Lista de Agulhas</h1>
      <ul>
        {agulhas.map((agulha) => (
          <li key={agulha.id}>
            {agulha.tipo} - {agulha.tamanho} - {agulha.data_validade} - {agulha.marca}
          </li>
        ))}
      </ul>
      <h2>Adicionar Agulha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tipo"
          value={newAgulha.tipo}
          onChange={(e) => setNewAgulha({ ...newAgulha, tipo: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tamanho"
          value={newAgulha.tamanho}
          onChange={(e) => setNewAgulha({ ...newAgulha, tamanho: e.target.value })}
          required
        />
        <input
          type="date"
          value={newAgulha.data_validade}
          onChange={(e) => setNewAgulha({ ...newAgulha, data_validade: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Marca"
          value={newAgulha.marca}
          onChange={(e) => setNewAgulha({ ...newAgulha, marca: e.target.value })}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AgulhasPage;
