### Automação de Testes E2E com Cypress – Real World App

![Cypress](https://img.shields.io/badge/Cypress-15.x-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![QA Automation](https://img.shields.io/badge/QA-Automation-blue)

## Sobre o Projeto

Este projeto contém uma suíte de testes automatizados End-to-End (E2E) desenvolvida com Cypress.

O Cypress Real World App (RWA) é utilizado como aplicação sob teste (AUT - Application Under Test).

O principal objetivo deste projeto é demonstrar conhecimentos práticos em:

- Testes End-to-End
- Automação de testes de UI
- Page Object Model (POM)
- Cenários positivos e negativos
- Gerenciamento de dados de teste
- Assertions (validações)
- Organização de testes
- Git e GitHub

## Cenários de Teste

### Login

- [x] Login com credenciais válidas
- [x] Login com usuário inválido
- [x] Login com senha inválida
- [x] Login sem credenciais

### Cadastro

- [ ] Cadastro realizado com sucesso
- [ ] Cadastro com dados inválidos
- [ ] Validação de campos obrigatórios

## Estrutura do Projeto

cypress/
├── fixtures/
│   └── userData.json
│
├── pages/
│   ├── loginPage.js
│   └── dashboard.js
│
└── tests/
    └── e2e/
        └── login.spec.js

## Tecnologias

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

## Padrão de Projeto

Este projeto utiliza o padrão **Page Object Model (POM)** para separar os cenários de teste das interações com as páginas da aplicação.

Essa abordagem contribui para:

- Melhor manutenção do código
- Reutilização de métodos
- Maior legibilidade
- Organização dos testes
- Facilidade de expansão da suíte de testes

## Como Executar o Projeto

### Instalar as dependências

```bash
npm install
