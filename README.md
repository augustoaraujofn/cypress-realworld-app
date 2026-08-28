# 🧪 Automação E2E com Cypress — Real World App

![Cypress](https://img.shields.io/badge/Cypress-15.x-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![QA Automation](https://img.shields.io/badge/QA-Automation-blue)

## 🎯 Objetivo

Este projeto representa minha evolução prática na área de **QA Automation**.

O objetivo é desenvolver uma automação cada vez mais organizada, buscando aplicar conceitos utilizados em projetos reais, como reutilização de código, separação de responsabilidades, manutenção dos testes e criação de cenários que realmente agreguem valor à validação da aplicação.

Mais do que apenas executar testes, a proposta é construir uma base de automação **legível, organizada e sustentável**.

---

## 👨‍💻 Autor

**Augusto**

**QA Automation | Cypress | JavaScript**

Projeto desenvolvido para estudos, prática e construção de portfólio profissional em QA Automation.

---

## Neste projeto estou trabalhando principalmente com:

* Testes End-to-End
* Automação de interface
* Page Object Model (POM)
* Fixtures para massa de dados
* Assertions
* Cenários positivos e negativos
* Reutilização de código
* Organização dos testes
* Git e GitHub

---

## 🔎 Cenários automatizados

### Login

| Cenário                       | Status |
| ----------------------------- | :----: |
| Login com credenciais válidas |    ✅   |
| Login com usuário inválido    |    ✅   |
| Login com senha inválida      |    ✅   |
| Login sem usuário e senha     |    ✅   |

### Cadastro

Os testes de cadastro fazem parte dos próximos passos do projeto.

| Cenário                          | Status |
| -------------------------------- | :----: |
| Cadastro com dados válidos       |    ⏳   |
| Cadastro com dados inválidos     |    ⏳   |
| Validação de campos obrigatórios |    ⏳   |

---

## 📁 Estrutura

 🛠️ Tecnologias
Cypress
JavaScript
Node.js
Yarn

🌿 Branches
main → testes de automação desenvolvidos com Cypress.
develop → aplicação completa do Cypress Real World App utilizada como ambiente para execução dos testes.
🚀 Como executar

### Clone o repositório e entre na pasta:

git clone SEU_REPOSITORIO
cd real-world-app
yarn install
▶️ Executar os testes automaticamente

Um único comando inicia a aplicação, aguarda o servidor ficar disponível e executa os testes Cypress de forma automática:

yarn test:e2e

🖥️ Abrir o Cypress

Para abrir a interface do Cypress e escolher os testes manualmente:

yarn cypress:open

Importante: o comando yarn cypress:open requer que a aplicação esteja em execução.
Para uma execução completa e automática, utilize yarn test:e2e.

📁 Estrutura dos testes
cypress/
├── e2e/
├── fixtures/
├── pages/
└── support/

## 📐 Page Object Model (POM)

Os testes utilizam o padrão Page Object Model (POM) para separar a interação com a aplicação da lógica dos testes.

Isso facilita a organização, reutilização e manutenção do código, evitando a repetição de seletores e ações dentro dos cenários de teste.