<?php
/**
 * RELATÓRIO DE INSCRIÇÕES - WAKE & MOVE
 * 
 * IMPORTANTE: Este arquivo deve ficar FORA da pasta public_html
 * para não ser acessível via web. Execute apenas via cPanel/File Manager.
 * 
 * Para usar:
 * 1. Faça upload deste arquivo para uma pasta privada (ex: /private_html/)
 * 2. No File Manager do cPanel, clique no arquivo
 * 3. Execute para gerar o CSV
 */

// Configurações do banco (usar as mesmas do analytics.php)
$host = 'localhost';
$dbname = 'u747501446_wakemove';
$username = 'u747501446_user';
$password = 'Wake2025@';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Query para buscar todas as inscrições
    $stmt = $pdo->query("
        SELECT 
            id,
            name,
            email, 
            cpf,
            phone,
            event_name,
            timestamp,
            utm_source,
            utm_medium,
            utm_campaign,
            ip_address
        FROM registrations 
        ORDER BY timestamp DESC
    ");
    
    $registrations = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Nome do arquivo com data atual
    $filename = 'wake_move_inscricoes_' . date('Y-m-d_H-i-s') . '.csv';
    
    // Headers para forçar download
    header('Content-Type: text/csv; charset=UTF-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Pragma: no-cache');
    header('Expires: 0');
    
    // Abrir output como CSV
    $output = fopen('php://output', 'w');
    
    // BOM para UTF-8 (compatibilidade Excel)
    fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
    
    // Cabeçalho do CSV
    fputcsv($output, [
        'ID',
        'Nome Completo',
        'E-mail',
        'CPF', 
        'WhatsApp',
        'Evento',
        'Data/Hora Inscrição',
        'Origem (UTM)',
        'Mídia (UTM)',
        'Campanha (UTM)',
        'IP'
    ], ';');
    
    // Dados das inscrições
    foreach ($registrations as $reg) {
        fputcsv($output, [
            $reg['id'],
            $reg['name'],
            $reg['email'],
            $reg['cpf'],
            $reg['phone'],
            $reg['event_name'],
            $reg['timestamp'],
            $reg['utm_source'] ?? '',
            $reg['utm_medium'] ?? '',
            $reg['utm_campaign'] ?? '',
            $reg['ip_address']
        ], ';');
    }
    
    fclose($output);
    
} catch(PDOException $e) {
    // Em caso de erro, mostrar mensagem
    echo "ERRO: Não foi possível conectar ao banco de dados.\n";
    echo "Detalhes: " . $e->getMessage() . "\n";
    echo "\nVerifique:\n";
    echo "1. Se as credenciais do banco estão corretas\n";
    echo "2. Se o banco foi criado corretamente\n";
    echo "3. Se as tabelas existem\n";
}
?>
