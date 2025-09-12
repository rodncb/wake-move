-- Configuração do banco de dados para Wake & Move Analytics
-- Execute este script no phpMyAdmin da Hostinger

-- Criar tabela de inscrições
CREATE TABLE IF NOT EXISTS registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(14),
    phone VARCHAR(20),
    distance VARCHAR(50),
    event_name VARCHAR(100),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    referrer TEXT,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    session_id VARCHAR(255),
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_event (event_name),
    INDEX idx_timestamp (timestamp),
    INDEX idx_utm_source (utm_source)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar tabela de eventos para futuras edições
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE,
    location VARCHAR(255),
    price DECIMAL(10,2),
    max_participants INT,
    status ENUM('draft', 'active', 'completed', 'cancelled') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir evento atual
INSERT INTO events (name, date, location, price, max_participants, status) 
VALUES ('Wake & Move Primavera 2024', '2024-09-22', 'Brasília, DF', 197.00, 1000, 'active');

-- Criar tabela de conversões
CREATE TABLE IF NOT EXISTS conversions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_id INT,
    conversion_type ENUM('view', 'registration', 'payment') DEFAULT 'view',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    session_id VARCHAR(255),
    ip_address VARCHAR(45),
    FOREIGN KEY (registration_id) REFERENCES registrations(id) ON DELETE SET NULL,
    INDEX idx_type (conversion_type),
    INDEX idx_timestamp (timestamp),
    INDEX idx_session (session_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Criar view para relatórios
CREATE VIEW registration_stats AS
SELECT 
    DATE(timestamp) as date,
    COUNT(*) as total_registrations,
    COUNT(DISTINCT email) as unique_emails,
    COUNT(CASE WHEN distance = '5km' THEN 1 END) as distance_5km,
    COUNT(CASE WHEN distance = '10km' THEN 1 END) as distance_10km,
    COUNT(CASE WHEN distance = '21km' THEN 1 END) as distance_21km,
    COUNT(CASE WHEN utm_source IS NOT NULL THEN 1 END) as with_utm
FROM registrations 
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- Criar usuário específico para a aplicação (opcional)
-- GRANT SELECT, INSERT, UPDATE ON registrations TO 'wakemove_app'@'localhost';
-- GRANT SELECT, INSERT ON conversions TO 'wakemove_app'@'localhost';
-- GRANT SELECT ON events TO 'wakemove_app'@'localhost';
