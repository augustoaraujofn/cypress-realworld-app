# 🧪 Automação E2E com Cypress — Real World App

![Cypress](https://img.shields.io/badge/Cypress-15.17.0-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Yarn](https://img.shields.io/badge/Yarn-1.22.22-blue)
![QA Automation](https://img.shields.io/badge/QA-Automation-blue)

## 🎯 Objetivo

Este projeto representa minha evolução prática na área de **QA Automation**.

O objetivo é desenvolver testes E2E organizados, aplicando conceitos utilizados em projetos reais, como **Page Object Model, reutilização de código, fixtures, assertions e cenários positivos e negativos**.

---

## 👨‍💻 Autor

**Augusto**

**QA Automation | Cypress | JavaScript**

Projeto desenvolvido para estudos, prática e construção de portfólio profissional em QA Automation.

---

## 🛠️ Tecnologias

* Cypress 15.17.0
* JavaScript
* Node.js 22.x
* Yarn 1.22.22
* Git / GitHub

---

## 🔎 Cenários automatizados

### Login

| Cenário                       | Status |
| ----------------------------- | :----: |
| Login com credenciais válidas |    ✅   |
| Login com usuário inválido    |    ✅   |
| Login com senha inválida      |    ✅   |
| Login sem usuário e senha     |    ✅   |

---

## 📁 Estrutura do projeto

```text
cypress/
├── e2e/          # Cenários de teste
├── fixtures/     # Massa de dados
├── pages/        # Page Objects
└── support/      # Configurações e comandos
```

---

## 📐 Page Object Model (POM)

Os testes utilizam **Page Object Model (POM)**.

A ideia é separar as ações da página dos cenários de teste, facilitando a **leitura, reutilização e manutenção** do código.

---

## 🌿 Branches

* `main` → versão principal do projeto e testes de automação.
* `develop` → aplicação do Cypress Real World App utilizada como ambiente para execução dos testes.

---

## 🚀 Como executar

### Pré-requisitos

* Node.js **22.x**
* Yarn **1.22.22**
* Cypress **15.x**

### Instalação

```bash
git clone https://github.com/augustoaraujofn/cypress-realworld-app.git
cd cypress-realworld-app
yarn install
```

### Executar os testes

O comando abaixo inicia a aplicação e executa os testes E2E:

```bash
yarn test:e2e
```

### Abrir o Cypress

Para executar os testes pela interface do Cypress:

```bash
yarn cypress:open
```

Para executar pelo terminal:

```bash
yarn cypress:run
```

> O Cypress já está configurado no projeto. Não é necessário instalá-lo globalmente.
