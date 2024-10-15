# Backend Application

![NestJS](https://img.shields.io/badge/NestJS-v10.0.0-E0234E?style=flat-square&logo=nestjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0-336791?style=flat-square&logo=postgresql)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud%20App%20Engine-Deployed-4285F4?style=flat-square&logo=google-cloud)
![ESLint](https://img.shields.io/badge/ESLint-8.42.0-4B32C3?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.0.0-F7B93E?style=flat-square&logo=prettier)
![Docker](https://img.shields.io/badge/Docker--2496ED?style=flat-square&logo=docker)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.1.3-007ACC?style=flat-square&logo=typescript)
![Swagger](https://img.shields.io/badge/Swagger--85EA2D?style=flat-square&logo=swagger)

## Description

This is a backend application built with NestJS, TypeScript, PostgreSQL, and deployed on Google Cloud App Engine. It uses SRP with JWT authentication and integrates Swagger for API documentation. Environment variables are validated using Joi, and the code follows ESLint and Prettier standards.

## Deployed Application

The API is deployed on Google Cloud App Engine. You can access the live version of the API using the following link:

[API](https://lizard-438618.lm.r.appspot.com/)

Use the provided API documentation for available endpoints and interact with the deployed version via Swagger at:

[Documentation](https://lizard-438618.lm.r.appspot.com/api)

## Features

- **Authentication**
  - Register
  - Login
  - Verify
- **User**
  - Get user profile
  - Patch username

## Requirements

- Node.js
- PostgreSQL
- Google Cloud SDK
- Docker

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/project-lizard.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables. Make sure to configure the following in your `backend/.env` file:

   ```env
    SERVICE_PORT=5000
    SERVICE_HOST=localhost
    SERVICE_NAME=Lizard

    BUILD_DOCS=true

    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=postgres
    DB_DATABASE=lizard

    JWT_EXPIRATION_TIME=30d
    JWT_SECRET_KEY=some-random-super-secret-key

    CORS_ORIGIN=http://frontend
    CORS_METHODS=GET,PATCH,POST,OPTIONS
   ```

4. Environment variables will be validated using Joi.

## Running the Application

- **Development:**

  ```bash
  yarn start:dev
  ```

- **Build:**

  ```bash
  yarn build
  ```

- **Production:**

  ```bash
  yarn start
  ```

- **Docker:**
  ```bash
  docker build -t lizard-api .
  docker run -p 3000:3000 lizard-api
  ```

## Deployment

1. Deploy to Google Cloud App Engine:
   ```bash
   yarn deploy
   ```

## Linting and Formatting

- **Lint:**

  ```bash
  yarn lint
  ```

- **Format:**
  ```bash
  yarn format
  ```

## Git Hooks

The project uses lint-staged to run linting and formatting checks before committing. Git hooks are configured to ensure code quality. The following scripts are set up:

- **pre-commit**: Runs linting and formatting for both frontend and backend.
- **commit-msg**: Ensures that commit messages follow the conventional commit format.

## API Documentation

Swagger is integrated for API documentation. Access the Swagger UI at: http://localhost:3000/api
