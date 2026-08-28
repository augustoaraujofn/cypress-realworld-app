const { execSync, spawn, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');
const rwaDir = path.resolve(projectDir, 'rwa');

function run(command, options = {}) {
  console.log(`\n> ${command}\n`);

  execSync(command, {
    stdio: 'inherit',
    shell: true,
    ...options,
  });
}

let server;

try {
  // Baixa a branch develop do RWA caso ainda não exista
  if (!fs.existsSync(rwaDir)) {
    console.log('\nPreparando o Cypress Real World App...\n');

    run(
      'git clone --branch develop --single-branch https://github.com/augustoaraujofn/cypress-realworld-app.git rwa',
      { cwd: projectDir }
    );
  }

  // Instala as dependências do RWA
  console.log('\nInstalando dependencias do RWA...\n');
  run('yarn install', { cwd: rwaDir });

  // Inicia o RWA
  console.log('\nIniciando o Cypress Real World App...\n');

  server = spawn('yarn', ['dev'], {
    cwd: rwaDir,
    stdio: 'inherit',
    shell: true,
  });

  // Encerra o servidor quando os testes terminarem
  const stopServer = () => {
    if (server && !server.killed) {
      server.kill();
    }
  };

  process.on('SIGINT', () => {
    stopServer();
    process.exit(1);
  });

  process.on('SIGTERM', () => {
    stopServer();
    process.exit(1);
  });

  // Aguarda o RWA ficar disponível
  console.log('\nAguardando a aplicacao iniciar...\n');

  run('npx wait-on http://localhost:3000', {
    cwd: projectDir,
  });

  // Executa os testes Cypress
  console.log('\nExecutando os testes Cypress...\n');

  const result = spawnSync('yarn', ['cypress', 'run'], {
    cwd: projectDir,
    stdio: 'inherit',
    shell: true,
  });

  stopServer();

  process.exit(result.status ?? 1);
} catch (error) {
  console.error('\nErro durante a execucao dos testes.');
  console.error(error.message);

  if (server && !server.killed) {
    server.kill();
  }

  process.exit(1);
}