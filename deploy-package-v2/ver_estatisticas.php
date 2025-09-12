<?php
/**
 * ESTATÍSTICAS SIMPLES - WAKE & MOVE
 * 
 * Execute este arquivo via cPanel para ver estatísticas básicas
 * Não gera download, apenas mostra na tela
 */

// Configurações do banco
$host = 'localhost';
$dbname = 'u747501446_wakemove';
$username = 'u747501446_user';
$password = 'Wake2025@';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "=== RELATÓRIO WAKE & MOVE - " . date('d/m/Y H:i:s') . " ===\n\n";
    
    // Total de inscrições
    $stmt = $pdo->query("SELECT COUNT(*) as total FROM registrations");
    $total = $stmt->fetch()['total'];
    echo "📊 TOTAL DE INSCRIÇÕES: " . $total . "\n\n";
    
    // Por evento
    echo "📅 POR EVENTO:\n";
    $stmt = $pdo->query("SELECT event_name, COUNT(*) as count FROM registrations GROUP BY event_name");
    while ($row = $stmt->fetch()) {
        echo "   " . ($row['event_name'] ?: 'Sem evento') . ": " . $row['count'] . "\n";
    }
    echo "\n";
    
    // Por data (últimos 7 dias)
    echo "📈 INSCRIÇÕES POR DIA (últimos 7 dias):\n";
    $stmt = $pdo->query("
        SELECT DATE(timestamp) as date, COUNT(*) as count 
        FROM registrations 
        WHERE timestamp >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        GROUP BY DATE(timestamp) 
        ORDER BY date DESC
    ");
    while ($row = $stmt->fetch()) {
        echo "   " . date('d/m/Y', strtotime($row['date'])) . ": " . $row['count'] . "\n";
    }
    echo "\n";
    
    // UTM Sources (se houver)
    echo "🎯 ORIGENS DO TRÁFEGO:\n";
    $stmt = $pdo->query("
        SELECT utm_source, COUNT(*) as count 
        FROM registrations 
        WHERE utm_source IS NOT NULL 
        GROUP BY utm_source 
        ORDER BY count DESC
    ");
    $utm_rows = $stmt->fetchAll();
    if (count($utm_rows) > 0) {
        foreach ($utm_rows as $row) {
            echo "   " . $row['utm_source'] . ": " . $row['count'] . "\n";
        }
    } else {
        echo "   Nenhum dado de UTM encontrado\n";
    }
    echo "\n";
    
    // Últimas 5 inscrições
    echo "🆕 ÚLTIMAS 5 INSCRIÇÕES:\n";
    $stmt = $pdo->query("
        SELECT name, email, timestamp 
        FROM registrations 
        ORDER BY timestamp DESC 
        LIMIT 5
    ");
    while ($row = $stmt->fetch()) {
        echo "   " . $row['name'] . " (" . $row['email'] . ") - " . 
             date('d/m/Y H:i', strtotime($row['timestamp'])) . "\n";
    }
    
    echo "\n=== FIM DO RELATÓRIO ===\n";
    
} catch(PDOException $e) {
    echo "ERRO: " . $e->getMessage() . "\n";
}
?>
