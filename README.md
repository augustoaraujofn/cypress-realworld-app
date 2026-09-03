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

# 🚀 Como executar

## 1. Pré-requisitos

Antes de executar o projeto, instale:

| Tecnologia | Versão      |
| ---------- | ----------- |
| Node.js    | **22.x**    |
| Yarn       | **1.22.22** |
| Cypress    | **15.17.0** |

### Node.js

Se estiver utilizando **NVM for Windows**:

```bash
nvm install 22
nvm use 22
```

Verifique:

```bash
node -v
```

Deve retornar algo como:

```text
v22.x.x
```

### Yarn

Instale o Yarn Classic:

```bash
npm install -g yarn@1.22.22
```

Verifique:

```bash
yarn -v
```

Resultado esperado:

```text
1.22.22
```

> O Cypress é instalado automaticamente pelo projeto. Não é necessário instalar o Cypress globalmente.

---

## 2. Clone o projeto

```bash
git clone https://github.com/augustoaraujofn/cypress-realworld-app.git
cd cypress-realworld-app
```

---

## 3. Instale as dependências

```bash
yarn install
```

---

## 🧪 4. Execute os testes

Para executar a aplicação e os testes E2E automaticamente:

```bash
yarn test:e2e
```

Esse comando inicia a aplicação, aguarda o servidor ficar disponível e executa os testes Cypress.

### 🖥️ Executar pelo Cypress

Para abrir a interface do Cypress:

```bash
yarn cypress:open
```

Depois, escolha o teste que deseja executar.

> **Importante:** o comando `yarn cypress:open` requer que a aplicação esteja em execução.

---

## 🔍 Verificar as versões

Caso queira confirmar se o ambiente está configurado corretamente:

```bash
node -v
yarn -v
npx cypress version
```

Ambiente esperado:

```text
Node.js: 22.x
Yarn: 1.22.22
Cypress: 15.17.0
```

---

## 📌 Resumo rápido

Se o ambiente já estiver configurado, basta:

```bash
git clone https://github.com/augustoaraujofn/cypress-realworld-app.git
cd cypress-realworld-app
yarn install
yarn test:e2e
```

---

## 📚 O que estou praticando

* Testes End-to-End
* Automação de interface
* Page Object Model (POM)
* Fixtures
* Assertions
* Cenários positivos e negativos
* Reutilização de código
* Organização e manutenção dos testes
* Git e GitHub
* Boas práticas de QA Automation
