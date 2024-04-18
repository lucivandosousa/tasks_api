# API de tarefas usando client nativo e SQLite

Esta é uma API construída usando o framework Express.js para Node.js com persistência em um banco relacional SQLite utilizando um client nativo. A API simula operações básicas CRUD (Criar, Ler, Atualizar e Excluir) em um banco relacional.

## Instalação

### 1. Clone o repositório para sua máquina local:

```
https://github.com/lucivandosousa/tasks_api
```
### 2. Navegue até o diretório do projeto

### 3. Instale as dependências necessárias:

```
npm install
```

## Funcionalidades

### 1. Iniciar a API.

Para iniciar a API, execute o seguinte comando:

```
npm run dev
```
A API será executada na porta 3000 por padrão, ou na porta especificada pela variável de ambiente PORT.

### 2. Endpoints

 - POST "/tasks" Adiciona uma nova tarefa à lista de tarefas.

 - GET "/tasks" Retorna a lista completa de tarefas.

 - PUT "/tasks/:id" Atualiza uma tarefa específica com base no ID fornecido.

 - DELETE "/tasks/:id" Exclui uma tarefa específica com base no ID fornecido.