# 🧪 Automação E2E com Cypress — Real World App

![Cypress](https://img.shields.io/badge/Cypress-15.x-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![QA Automation](https://img.shields.io/badge/QA-Automation-blue)

Projeto de automação de testes **End-to-End (E2E)** desenvolvido com **Cypress e JavaScript**, utilizando o **Cypress Real World App (RWA)** como aplicação sob teste.

O projeto faz parte dos meus estudos e da construção do meu portfólio em **QA Automation**, com foco em organização, manutenção e boas práticas na automação de testes.

---

## 📌 Sobre o projeto

A automação foi construída para testar alguns dos principais fluxos do **Cypress Real World App**, começando pelo processo de autenticação.

A ideia é desenvolver a suíte de forma incremental, adicionando novos cenários conforme avanço nos estudos e aprofundamento nos recursos do Cypress.

Neste projeto estou trabalhando principalmente com:

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

```text
real-world-app/
│
├── cypress/
│   ├── e2e/
│   │   └── login.spec.cy.js
│   │
│   ├── fixtures/
│   │   └── userData.json
│   │
│   ├── pages/
│   │   ├── dashboard.js
│   │   └── loginPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── README.md
├── cypress.config.js
├── package.json
└── yarn.lock
```

O repositório foi mantido propositalmente enxuto. A aplicação **Real World App não está dentro deste projeto**.

O objetivo é manter aqui somente os arquivos relacionados à automação que estou desenvolvendo.

---

## 🧩 Page Object Model

A automação utiliza o padrão **Page Object Model (POM)** para separar os elementos e ações das páginas dos cenários de teste.

### Login

```text
cypress/pages/loginPage.js
```

Responsável pelos elementos e ações relacionados à tela de login.

### Dashboard

```text
cypress/pages/dashboard.js
```

Responsável pelas validações realizadas após o login.

### Cenários

```text
cypress/e2e/login.spec.cy.js
```

Contém os cenários de teste relacionados ao login.

### Massa de dados

```text
cypress/fixtures/userData.json
```

Contém os dados utilizados durante os testes.

Essa organização facilita a leitura, reutilização e manutenção da automação.

---

## 🛠️ Tecnologias

* **Cypress 15**
* **JavaScript**
* **Node.js 22**
* **Yarn Classic**
* **Git**
* **GitHub**

---

# 🚀 Como executar

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

* Node.js
* NVM
* Yarn Classic
* Git

A versão utilizada no projeto é:

```text
Node.js 22.20.0
```

Você pode verificar as versões instaladas com:

```bash
node --version
nvm version
yarn --version
git --version
```

Caso esteja utilizando NVM, selecione a versão utilizada pelo projeto:

```bash
nvm use 22.20.0
```

---

## 1. Aplicação sob teste

O **Cypress Real World App (RWA)** é mantido separadamente deste repositório.

Para executar os testes, primeiro é necessário iniciar a aplicação.

No diretório do projeto original do RWA:

```bash
yarn install
```

Depois:

```bash
yarn dev
```

Quando a aplicação estiver funcionando, ela estará disponível em:

```text
http://localhost:3000
```

Mantenha esse terminal aberto enquanto os testes estiverem sendo executados.

---

## 2. Projeto de automação

Com o RWA em execução, abra outro terminal e entre no projeto de automação.

Instale as dependências:

```bash
yarn install
```

Depois, abra o Cypress:

```bash
yarn cypress open
```

Na interface do Cypress:

1. Selecione **E2E Testing**
2. Escolha o navegador
3. Selecione `login.spec.cy.js`
4. Execute os testes

---

## 🖥️ Execução pelo terminal

Também é possível executar os testes sem abrir a interface gráfica do Cypress:

```bash
yarn cypress run
```

Para executar somente os testes de login:

```bash
yarn cypress run --spec "cypress/e2e/login.spec.cy.js"
```

---

## 🔄 Fluxo do projeto

A aplicação e a automação são mantidas em projetos separados:

```text
┌──────────────────────────────┐
│     Cypress Real World App  │
│                              │
│          yarn dev            │
│              │               │
│              ▼               │
│     http://localhost:3000    │
└──────────────┬───────────────┘
               │
               │ aplicação sob teste
               ▼
┌──────────────────────────────┐
│      Projeto de Automação    │
│                              │
│     yarn cypress open        │
│              │               │
│              ▼               │
│       Testes E2E Cypress     │
└──────────────────────────────┘
```

Essa separação permite manter o repositório de QA limpo e focado exclusivamente na automação desenvolvida.

---

## 🧪 Massa de dados

Os dados utilizados nos testes são mantidos em fixtures:

```text
cypress/fixtures/userData.json
```

Dessa forma, os dados ficam separados da implementação dos testes, facilitando futuras alterações e a criação de novos cenários.

---

## 📸 Evidências

As evidências das execuções serão adicionadas conforme a evolução do projeto.

Entre os próximos recursos planejados estão:

* Screenshots
* Evidências de cenários
* Relatórios de execução
* Melhorias na documentação

---

## 📈 Próximos passos

* [x] Configuração inicial do Cypress
* [x] Estrutura do projeto
* [x] Page Object para Login
* [x] Massa de dados para Login
* [x] Login com credenciais válidas
* [x] Login com usuário inválido
* [x] Login com senha inválida
* [x] Login sem credenciais
* [ ] Automação do cadastro
* [ ] Novos cenários negativos
* [ ] Novos Page Objects
* [ ] Adicionar evidências
* [ ] Implementar relatório de execução
* [ ] Integração com CI/CD

---

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

## 🌐 Aplicação utilizada

**Cypress Real World App (RWA)**

O RWA é utilizado como **Application Under Test (AUT)**.

A aplicação original é mantida separadamente e não faz parte deste repositório. Este projeto contém exclusivamente os testes automatizados desenvolvidos durante os estudos.
