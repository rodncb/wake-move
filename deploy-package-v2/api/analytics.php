<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://wakeandmove.com.br');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Configurações do banco de dados (Hostinger)
$host = 'localhost';
$dbname = 'u747501446_wakemove';
$username = 'u747501446_user';
$password = 'Wake2025@';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro de conexão com banco de dados']);
    exit;
}

// Lidar com requisições OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Receber dados da inscrição
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['error' => 'Dados inválidos']);
        exit;
    }
    
    try {
        // Inserir no banco de dados
        $stmt = $pdo->prepare("
            INSERT INTO registrations (
                name, email, cpf, phone, event_name, 
                timestamp, user_agent, referrer, utm_source, 
                utm_medium, utm_campaign, session_id, ip_address
            ) VALUES (
                :name, :email, :cpf, :phone, :event_name,
                :timestamp, :user_agent, :referrer, :utm_source,
                :utm_medium, :utm_campaign, :session_id, :ip_address
            )
        ");
        
        $stmt->execute([
            ':name' => $input['name'] ?? '',
            ':email' => $input['email'] ?? '',
            ':cpf' => $input['cpf'] ?? '',
            ':phone' => $input['phone'] ?? '',
            ':event_name' => $input['event'] ?? '',
            ':timestamp' => $input['timestamp'] ?? date('Y-m-d H:i:s'),
            ':user_agent' => $input['userAgent'] ?? '',
            ':referrer' => $input['referrer'] ?? '',
            ':utm_source' => $input['utm_source'] ?? '',
            ':utm_medium' => $input['utm_medium'] ?? '',
            ':utm_campaign' => $input['utm_campaign'] ?? '',
            ':session_id' => $input['sessionId'] ?? '',
            ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? ''
        ]);
        
        // Log para arquivo (backup)
        $logData = [
            'id' => $pdo->lastInsertId(),
            'timestamp' => date('Y-m-d H:i:s'),
            'data' => $input,
            'ip' => $_SERVER['REMOTE_ADDR']
        ];
        
        file_put_contents(
            'registrations_log.txt', 
            json_encode($logData) . "\n", 
            FILE_APPEND | LOCK_EX
        );
        
        echo json_encode([
            'success' => true,
            'message' => 'Dados salvos com sucesso',
            'id' => $pdo->lastInsertId()
        ]);
        
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao salvar dados: ' . $e->getMessage()]);
    }
    
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Endpoint para estatísticas (apenas para admins)
    $token = $_GET['token'] ?? '';
    
    if ($token !== 'admin_token_123') { // Mudar por token seguro
        http_response_code(401);
        echo json_encode(['error' => 'Token inválido']);
        exit;
    }
    
    try {
        // Estatísticas gerais
        $stats = [];
        
        // Total de inscrições
        $stmt = $pdo->query("SELECT COUNT(*) as total FROM registrations");
        $stats['total_registrations'] = $stmt->fetch()['total'];
        
        // Por evento
        $stmt = $pdo->query("SELECT event_name, COUNT(*) as count FROM registrations GROUP BY event_name");
        $stats['by_event'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Por distância
        $stmt = $pdo->query("SELECT distance, COUNT(*) as count FROM registrations GROUP BY distance");
        $stats['by_distance'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Por origem (UTM)
        $stmt = $pdo->query("SELECT utm_source, COUNT(*) as count FROM registrations WHERE utm_source IS NOT NULL GROUP BY utm_source");
        $stats['by_utm_source'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Inscrições por dia
        $stmt = $pdo->query("SELECT DATE(timestamp) as date, COUNT(*) as count FROM registrations GROUP BY DATE(timestamp) ORDER BY date DESC LIMIT 30");
        $stats['daily_registrations'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($stats);
        
    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao buscar estatísticas: ' . $e->getMessage()]);
    }
}
?>
