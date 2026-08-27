# Automação de Testes E2E com Cypress - Real World App

![Cypress](https://img.shields.io/badge/Cypress-15.x-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![QA Automation](https://img.shields.io/badge/QA-Automation-blue)

# Objetivo

Este projeto faz parte dos meus estudos e do meu portfólio na área de **QA Automation**.

Meu objetivo é colocar em prática os conhecimentos de automação de testes utilizando Cypress, melhorar a organização dos projetos e desenvolver uma suíte de testes cada vez mais completa.

---

## Autor

**Augusto**

QA Automation | Cypress | JavaScript

Projeto desenvolvido para estudos e portfólio em QA Automation.

---

## Sobre o projeto

Este projeto foi criado para praticar e demonstrar automação de testes End-to-End utilizando Cypress.

Como aplicação sob teste (AUT), estou utilizando o **Cypress Real World App (RWA)**, uma aplicação criada pelo próprio Cypress para fins educacionais e de demonstração.

Neste projeto estou aplicando conceitos de QA Automation, como:

- Automação de testes de UI
- Testes End-to-End
- Page Object Model (POM)
- Cenários positivos e negativos
- Massa de dados para testes
- Assertions
- Organização dos testes
- Git e GitHub

---

## Cenários de teste

### Login

- ✅ Login com credenciais válidas
- ✅ Login com usuário inválido
- ✅ Login com senha inválida
- ✅ Login sem usuário e senha

### Cadastro

- [ ] Cadastro com dados válidos
- [ ] Cadastro com dados inválidos
- [ ] Validação de campos obrigatórios

Os cenários serão adicionados conforme o desenvolvimento do projeto avançar.

---
# Próximos passos

Pretendo continuar expandindo a suíte de testes com novos fluxos da aplicação.

- ✅ Criar estrutura inicial do projeto
- ✅ Criar Page Object para Login
- ✅ Criar massa de dados para Login
- ✅ Automatizar login válido
- ✅ Automatizar login com usuário inválido
- ✅ Automatizar login com senha inválida
- ✅ Automatizar login sem credenciais
- ✅ Automatizar cadastro
- ✅ Adicionar novos cenários negativos
- ✅ Adicionar mais Page Objects
- ✅ Adicionar evidências dos testes
- ✅ Implementar execução em CI/CD
- ✅ Adicionar relatório de testes

---

## Estrutura do projeto

```text
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
```

A estrutura foi organizada utilizando o **Page Object Model**, mantendo os elementos e ações das páginas separados dos cenários de teste.

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Yarn
- Git
- GitHub

---

## Page Object Model

O projeto utiliza o padrão **Page Object Model (POM)**.

A ideia é separar as ações realizadas na aplicação dos cenários de teste.

Por exemplo, ações relacionadas à tela de login ficam no arquivo:

```text
cypress/pages/loginPage.js
```

Enquanto os cenários ficam em:

```text
cypress/tests/e2e/login.spec.js
```

Isso facilita a manutenção e evita repetir código nos testes.

---

# Como executar o projeto

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js
- Yarn Classic (versão 1)
- Git

Para verificar se o Node.js está instalado:

```bash
node --version
```

Para verificar o Yarn:

```bash
yarn --version
```

Para verificar o Git:

```bash
git --version
```

Caso o Yarn Classic não esteja instalado:

```bash
npm install yarn@1 -g
```

---

## 1. Clonar o projeto

```bash
git clone https://github.com/SEU-USUARIO/cypress-realworld-app.git
```

Depois entre na pasta:

```bash
cd cypress-realworld-app
```

> Substitua `SEU-USUARIO` pelo seu usuário do GitHub.

---

## 2. Instalar as dependências

Execute:

```bash
yarn install
```

ou:

```bash
yarn
```

---

## 3. Iniciar o Real World App

Para iniciar a aplicação:

```bash
yarn dev
```

Por padrão, o projeto utiliza:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:3001
```

Depois que a aplicação estiver iniciada, acesse:

```text
http://localhost:3000
```

---

## 4. Usuários para teste

O Real World App possui usuários de exemplo para utilização durante os testes.

A senha padrão dos usuários de desenvolvimento é:

```text
s3cret
```

Os usuários podem ser encontrados no arquivo:

```text
data/database.json
```

Também é possível listar os usuários através do comando:

```bash
yarn list:dev:users
```

Os dados utilizados nos meus testes ficam organizados no arquivo:

```text
cypress/fixtures/userData.json
```

---

# Executando os testes

## Abrir o Cypress

Com a aplicação rodando, abra o Cypress:

```bash
yarn cypress:open
```

Ou:

```bash
npx cypress open
```

Depois:

1. Escolha **E2E Testing**
2. Escolha o navegador
3. Abra o arquivo `login.spec.js`
4. Execute os testes

---

## Executar pelo terminal

Também é possível executar os testes em modo headless:

```bash
yarn cypress:run
```

Ou:

```bash
npx cypress run
```

---

# Evidências

As evidências das execuções serão adicionadas ao projeto conforme novos cenários forem automatizados.

A ideia é utilizar screenshots e resultados das execuções para demonstrar os testes realizados.

---

# Git e GitHub

Durante o desenvolvimento estou utilizando branches para separar as funcionalidades.

Branch atual:

```text
exercicio-1-login-registro
```

O objetivo é manter os commits organizados e facilitar o acompanhamento da evolução do projeto.

---


## Aplicação utilizada

**Cypress Real World App (RWA)**

O Real World App é utilizado neste projeto como aplicação sob teste (AUT).

O projeto original foi desenvolvido pelo Cypress para fins educacionais e de demonstração.
