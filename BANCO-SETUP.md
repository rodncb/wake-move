# 🗄️ Configuração do Banco de Dados - Hostinger

## 📋 **Passo a Passo Rápido:**

### 1. **Criar Banco MySQL no cPanel**

1. **Acesse o cPanel da Hostinger**
2. **Vá em "MySQL Databases"**
3. **Criar novo banco:**
   - Nome: `u[NÚMERO]_wakemove` (exemplo: `u123456789_wakemove`)
4. **Criar usuário:**
   - Nome: `u[NÚMERO]_user`
   - Senha: Crie uma senha forte
5. **Adicionar usuário ao banco** com todas as permissões

### 2. **Executar Script SQL**

1. **Acesse "phpMyAdmin"** no cPanel
2. **Selecione o banco criado** (`u[NÚMERO]_wakemove`)
3. **Vá na aba "SQL"**
4. **Cole o conteúdo do arquivo `setup.sql`**
5. **Execute o script**

### 3. **Configurar API**

**Edite o arquivo `api/analytics.php` e altere as linhas:**

```php
// SUBSTITUIR PELOS DADOS REAIS:
$host = 'localhost';
$dbname = 'u123456789_wakemove';  // SEU BANCO REAL
$username = 'u123456789_user';    // SEU USUÁRIO REAL
$password = 'SUA_SENHA_FORTE';    // SUA SENHA REAL

// Token para estatísticas (linha 85)
if ($token !== 'TOKEN_ADMIN_SEGURO') { // ESCOLHA UM TOKEN
```

### 4. **Testar Conexão**

Após configurar, teste uma inscrição no site para verificar se os dados estão sendo salvos.

### 5. **Ver Estatísticas**

Acesse: `https://wakeandmove.com.br/api/analytics.php?token=SEU_TOKEN`

---

## ✅ **Tabelas Criadas:**

- `registrations` - Dados das inscrições
- `events` - Controle de eventos
- `conversions` - Tracking de conversões
- `registration_stats` - View com estatísticas

---

**Com isso o sistema de analytics estará funcionando 100%!** 🚀
