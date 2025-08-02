#!/usr/bin/env node
import prompts from 'prompts';
import chalk from 'chalk';
import fs from 'fs';
import { execSync } from 'child_process';

console.log(chalk.green(`
     .d$b.       .d$b.
   .$$^$$L     .$$^$$L
  :$$' '$$:. .:$$' '$$:
  $$'   '$$ $$'   '$$'   ${chalk.bold.green('Welcome to MyProject CLI!')}
  $$     $$ $$     $$    
  '$$. .d$$' '$$. .d$$'
    '$$$$'     '$$$$'
`));

(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: '📁 Where would you like to create your project?',
      initial: './my-app'
    },
    {
      type: 'select',
      name: 'frontend',
      message: '🌐 Choose your frontend framework:',
      choices: [
        { title: 'Nuxt 3', value: 'nuxt3' },
        { title: 'Vue 3 (Vite)', value: 'vue3' }
      ]
    },
    {
      type: 'select',
      name: 'backend',
      message: '🛠 Choose your backend framework:',
      choices: [
        { title: 'Fastify', value: 'fastify' },
        { title: 'NestJS', value: 'nestjs' }
      ]
    },
    {
      type: 'confirm',
      name: 'installDeps',
      message: '📥 Install dependencies?',
      initial: true
    }
  ]);

  const root = response.projectName;
  const frontendPath = `${root}/frontend`;
  const backendPath = `${root}/backend`;

  if (!root) {
    console.log(chalk.red('❌ Cancelled.'));
    process.exit(1);
  }

  fs.mkdirSync(root, { recursive: true });
  fs.writeFileSync(`${root}/README.md`, `# ${root}\nFrontend: ${response.frontend}\nBackend: ${response.backend}\n`);

  // Frontend scaffold
  if (response.frontend === 'nuxt3') {
    console.log(chalk.cyan(`📦 Scaffolding Nuxt 3...`));
    execSync('npx nuxi init frontend', { cwd: root, stdio: 'inherit' });
  } else if (response.frontend === 'vue3') {
    console.log(chalk.cyan(`📦 Scaffolding Vue 3 (Vite)...`));
    execSync('npm create vite@latest frontend -- --template vue', { cwd: root, stdio: 'inherit' });
  }

  // Backend scaffold
  if (response.backend === 'fastify') {
    console.log(chalk.cyan(`🛠 Setting up Fastify backend...`));
    fs.mkdirSync(backendPath, { recursive: true });
    fs.writeFileSync(`${backendPath}/index.js`, `
import Fastify from 'fastify';
const fastify = Fastify();
fastify.get('/', async () => ({ hello: 'world' }));
fastify.listen({ port: 3000 }, err => {
  if (err) throw err;
  console.log('🚀 Fastify server running at http://localhost:3000');
});
    `.trim());
  } else if (response.backend === 'nestjs') {
    console.log(chalk.cyan(`🛠 Creating NestJS project...`));
    execSync('npx @nestjs/cli new backend -y', { cwd: root, stdio: 'inherit' });
  }

  if (response.installDeps) {
    if (response.frontend === 'nuxt3') {
      execSync('npm install', { cwd: frontendPath, stdio: 'inherit' });
    } else if (response.frontend === 'vue3') {
      execSync('npm install', { cwd: frontendPath, stdio: 'inherit' });
    }

    if (response.backend === 'fastify') {
      execSync('npm init -y', { cwd: backendPath, stdio: 'inherit' });
      execSync('npm install fastify', { cwd: backendPath, stdio: 'inherit' });
    } else if (response.backend === 'nestjs') {
      execSync('npm install', { cwd: backendPath, stdio: 'inherit' });
    }

    console.log(chalk.green('✅ Dependencies installed successfully!'));
  }

  console.log(chalk.green(`🎉 Project setup complete at: ${root}`));
})();
