
![Wine - JS Testing Grounds](https://img.wine.com.br/logo/wine/black/wine.svg)

This is a vanilla JS boilerplate used for building the fundamentals of javascript.

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

To learn more about this template and other features, contact Eduardo Ferreira
through the wine discord channel.
