# Portluis

Este repositório contem todas as funcionalidade implementadas e mais algumas adiçoes
de melhorias.

## Como executar o projeto

Siga os passos corretamente para executar.

Voce precisa ter o MySQL instalado no seu ambiente:
Para instalar visite https://dev.mysql.com/downloads/installer/

Após instalaçao correta, crie uma conexao e um banco de dados MySQL. Se preferir utilize o arquivo create_database.sql na raíz do projeto para criar o banco de dados dentro de uma conexao ja existente.

Clone o projeto

```bash
  git clone https://github.com/firminoandre/api-contacts-test-portluis
```

Entre no diretório do projeto

```bash
  cd api-contacts-test-portluis
```

Instale as dependências

```bash
  npm install
```

Configure suas variáveis de ambiente (importante):

Existe um arquivo .env.example na raíz do projeto que contém as variáveis necessarias.
Renomeie este arquivo para .env

O conteúdo padrao dele deve ser (se nao houver particularidades de sua criacao do banco)

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_seu_banco
```

Com isso feito, execute o comando para rodar esta migration (criar a tabela):

```bash
node .\migrations\create-contacts-table-migration.js
```

Deve ser possivel ver uma mensagem de sucesso no console.

```bash
Success in conection
Created table
```

Após isso, execute para iniciar o servidor:

```bash
node server.js
```

Voce conseguirá acessar o front-end pela porta 3000 no localhost

http://localhost:3000

## Contato

andrezfirmino@gmail.com

## Demo

![App Screenshot](https://raw.githubusercontent.com/firminoandre/api-contacts-test-portluis/refs/heads/main/assets/demo.gif)
