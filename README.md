![Wine - JS Testing Grounds](https://img.wine.com.br/logo/wine/black/wine.svg)

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First of all, fork this repository into another private one. If you still don't
have the NVM installed, please do so through this [guide](https://heynode.com/tutorial/install-nodejs-locally-nvm/).
After installing NVM, install the project node version defined at the .nvmrc
file. You can do it through:

```sh
nvm install {NODE_VERSION}
```

Then install the project dependencies with:

```sh
npm install
# or
yarn
```

After that, please install both the Eslint and Prettier VsCode extensions.
Finally, take a look at the test folder, and place a breakpoint at the lines 5,
6 and 8 of the example.spec.ts file. Once everything is set, press F5 in your
keyboard. Your console should change to debug mode. In this mode you will be
able to pause and forward your code execution. You will also be able to check each
of your declared variables, callstacks and much more.

To run your test independently, please run:

```sh
npm run test:watch
# or
yarn test:watch
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `test:path {PATH}`: runs jest watch mode only at certain directorty

## Learn More

To learn more about this template and other features, contact Eduardo Ferreira or João Manoel
through the wine discord channel.

# Project

## São Judas Hospital
Hospital que cuida de pacientes com câncer, aids e alzheimer.

## 🚀 Desafio
O desafio é criar funcionalidades voltadas para os usuários do hospital. São elas:
- Buscar usuário por id/email (funcionalidades separadas)
- Deletar usuário por id/email (funcionalidades separadas)
- Deletar todos os usuários do sistema
- Criar usuário
- Editar usuário
- Pegar a quantidade de usuários atual do sistema
- Buscar a quantidade de usuários que possuem câncer, AIDS e alzheimer (funcionalidades separadas)

## Arquitetura do projeto
O app é dividido em duas estruturas de pastas:
- **Services**: São os serviços que deverão ser implementados conforme descrição acima
- **Types**: Tipos que o desenvolvedor usará no decorrer da aplicação.

Mais detalhes [aqui!](https://whimsical.com/PxAkk45kKMd6CazfV79eif)

## Objetivo
O objetivo é fazer todos os testes das funcionalidades passarem de acordo com os níveis atingidos na aplicação.
Primeiramente iremos trabalhar com funcionalidades de forma sincronas e em seguida assícronas (clients http).

## Project Rules
- All those commits needs to follow these conventional commits: `chore`, `improvement`, `feat`, `fix`, `test` and `revert`.
- All changes needs to create a branch and open a Pull Request.
- Disable lint lines **will not** permitted.
- Types `any` **will not** permitted.
