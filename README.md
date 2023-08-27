<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/codi-andre/node-api-solid.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codi-andre/node-api-solid.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codi-andre/node-api-solid.svg">
  <a href="https://github.com/codi-andre/node-api-solid/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codi-andre/node-api-solid.svg">
  </a>

  <a href="https://github.com/codi-andre/node-api-solid/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/codi-andre/node-api-solid.svg">
  </a>
</p>

## GymPass style app

### RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

## Technologies

This project uses the following technologies:

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [Vitest](https://vitest.dev/)
