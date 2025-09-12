# 🚀 Guia de Deploy - Wake & Move na Hostinger

## 📋 Checklist Pré-Deploy

### ✅ Verificações Técnicas

- [ ] Landing page totalmente funcional
- [ ] Formulário de inscrição integrado
- [ ] Redirecionamento para Mercado Pago (R$ 197)
- [ ] Sistema de analytics implementado
- [ ] Responsividade mobile/tablet testada
- [ ] Fonte Oswald carregando corretamente

### ✅ Arquivos Necessários

- [ ] Build da aplicação React (pasta `dist/`)
- [ ] Backend PHP (`api/analytics.php`)
- [ ] Script SQL de configuração (`database/setup.sql`)
- [ ] Certificado SSL configurado

---

## 🛠️ Passos para Deploy

### 1. Build da Aplicação

```bash
# No diretório do projeto
npm run build

# Verificar se a pasta dist/ foi criada
ls -la dist/
```

### 2. Configuração do Banco de Dados na Hostinger

#### 2.1 Criar Banco MySQL

1. Acesse cPanel da Hostinger
2. Vá em **MySQL Databases**
3. Crie um novo banco: `u123456789_wakemove`
4. Crie usuário: `u123456789_user`
5. Defina senha segura
6. Dê todas as permissões ao usuário

#### 2.2 Executar Script SQL

1. Acesse **phpMyAdmin**
2. Selecione o banco criado
3. Cole e execute o conteúdo do arquivo `database/setup.sql`

### 3. Upload dos Arquivos

#### 3.1 Frontend (Pasta public_html)

```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [outros assets]
└── api/
    └── analytics.php
```

#### 3.2 Backend PHP

1. Crie pasta `api/` em `public_html/`
2. Faça upload do `analytics.php`
3. **IMPORTANTE**: Edite as credenciais do banco no arquivo

### 4. Configuração do Domínio

#### 4.1 DNS

- Aponte `wakeandmove.com.br` para IP da Hostinger
- Configure subdomínio `www` se necessário

#### 4.2 SSL

1. No cPanel, vá em **SSL/TLS**
2. Ative SSL para `wakeandmove.com.br`
3. Force HTTPS redirect

---

## ⚙️ Configurações Importantes

### PHP Backend (analytics.php)

```php
// EDITAR ESTAS LINHAS COM DADOS REAIS:
$host = 'localhost';
$dbname = 'u123456789_wakemove';  // Seu banco real
$username = 'u123456789_user';    // Seu usuário real
$password = 'SUA_SENHA_SEGURA';   // Sua senha real

// Token de admin para estatísticas
if ($token !== 'SEU_TOKEN_ADMIN') { // Mudar por token seguro
```

### CORS Headers

O arquivo PHP já está configurado para aceitar requisições do domínio `wakeandmove.com.br`.

---

## 🧪 Testes Pós-Deploy

### 1. Teste Básico

- [ ] Site carrega em `https://wakeandmove.com.br`
- [ ] Layout responsivo funciona
- [ ] Formulário aparece corretamente

### 2. Teste de Funcionalidade

- [ ] Preencher formulário de inscrição
- [ ] Verificar redirecionamento para Mercado Pago
- [ ] Confirmar dados salvos no banco

### 3. Teste de Analytics

```javascript
// Testar no console do navegador
WakeMoveAnalytics.trackPageView();
WakeMoveAnalytics.trackRegistration({
  name: "Teste",
  email: "teste@email.com",
  distance: "5km",
});
```

### 4. Verificar Banco de Dados

```sql
-- Via phpMyAdmin
SELECT * FROM registrations ORDER BY timestamp DESC LIMIT 10;
SELECT * FROM registration_stats;
```

---

## 📊 Monitoramento e Analytics

### Acessar Estatísticas

```
GET https://wakeandmove.com.br/api/analytics.php?token=SEU_TOKEN_ADMIN
```

### Dados Disponíveis

- Total de inscrições
- Inscrições por evento
- Inscrições por distância
- Origem do tráfego (UTM)
- Inscrições por dia (últimos 30 dias)

### Google Analytics (Opcional)

Se quiser integrar GA4, adicione o código no `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

---

## 🚨 Troubleshooting

### Erro de CORS

- Verificar se domínio está correto no `analytics.php`
- Confirmar headers CORS configurados

### Erro de Banco

- Verificar credenciais no `analytics.php`
- Confirmar se usuário tem permissões
- Checar se tabelas foram criadas

### SSL/HTTPS

- Forçar redirect HTTP → HTTPS
- Verificar certificado instalado
- Testar mixed content warnings

### Performance

- Habilitar compressão gzip no cPanel
- Configurar cache de arquivos estáticos
- Otimizar imagens se necessário

---

## 📞 Suporte

### Logs de Erro

- Verificar `registrations_log.txt` no servidor
- Console do navegador para erros JS
- Error logs do cPanel

### Backup

O sistema salva dados em:

1. Banco MySQL (principal)
2. Arquivo `registrations_log.txt` (backup)
3. localStorage do navegador (temporário)

---

## 🎯 Próximos Passos

Após deploy bem-sucedido:

1. [ ] Configurar monitoramento automático
2. [ ] Implementar notificações por email
3. [ ] Criar dashboard de analytics
4. [ ] Preparar para próximos eventos
5. [ ] Documentar processo para equipe

---

**✨ Landing page pronta para receber inscrições e converter leads em R$ 197! ✨**
