CREATE DATABASE IF NOT EXISTS tatuagem;
USE tatuagem;

CREATE TABLE IF NOT EXISTS agulhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    tamanho VARCHAR(255) NOT NULL,
    data_validade DATE NOT NULL,
    marca VARCHAR(255) NOT NULL
);

INSERT INTO agulhas (tipo, tamanho, data_validade, marca)
VALUES
    ('Round Liner', '0.30mm', '2025-06-15', 'TattooPro'),
    ('Flat', '0.35mm', '2024-12-30', 'NeedleTech'),
    ('Magnum', '0.25mm', '2026-03-20', 'InkMaster');
