# Project Lizard

![NestJS](https://img.shields.io/badge/NestJS-v10.0.0-E0234E?style=flat-square&logo=nestjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0-336791?style=flat-square&logo=postgresql)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud%20App%20Engine-Deployed-4285F4?style=flat-square&logo=google-cloud)
![React](https://img.shields.io/badge/React-v18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-v5.4.9-brightgreen)
![Docker](https://img.shields.io/badge/Docker--2496ED?style=flat-square&logo=docker)
![Cloud Run](https://img.shields.io/badge/Deployed_on-Cloud_Run-orange)

## Overview

Project Lizard is a web application built with a NestJS backend and a React frontend, utilizing PostgreSQL for data management. The application is deployed on Google Cloud services, providing a robust and scalable architecture.

### Features

- **Backend**

  - Built with NestJS, TypeScript, and PostgreSQL
  - JWT authentication for secure access
  - Swagger integrated for API documentation
  - Environment variable validation using Joi
  - Deployed on Google Cloud App Engine

- **Frontend**
  - Developed with React and Vite for fast performance
  - State management with Redux
  - Responsive design for user-friendly interaction
  - Deployed on Google Cloud Run

## Secure Remote Password Authorization

The Secure Remote Password (SRP) protocol is an authentication method that allows secure password-based authentication without transmitting the actual password over the network.

### Workflow

- **Initialization**: The client and server agree on parameters and derive shared values.
- **Authentication**: The client computes a proof of knowledge of the password, which is sent to the server.
- **Verification**: The server verifies the proof without needing the actual password and responds with its own proof.
- **Session Establishment**: If both parties validate each other's proofs, a secure session is established.

### Frontend implementation

#### Login hook

```typescript
const loginUser = async ({
  email,
  password,
}: Credentials): Promise<RequestResult> => {
  // make request on /v1/auth/login
  const { salt, serverPublicKey } = await loginRequest({ email }).unwrap();

  const clientEphemeral = srp.generateEphemeral();
  const privateKey = srp.derivePrivateKey(salt, email, password);
  const clientSession = srp.deriveSession(
    clientEphemeral.secret,
    serverPublicKey,
    salt,
    email,
    privateKey
  );

  try {
    // make request on /v1/auth/verify
    const { serverProof, token } = await verifyRequest({
      email,
      clientProof: clientSession.proof,
      clientPublicKey: clientEphemeral.public,
    }).unwrap();

    srp.verifySession(clientEphemeral.public, clientSession, serverProof);

    dispatch(setAuthToken(token));

    return {
      result: "success",
    };
  } catch {
    dispatch(setAuthToken(null));

    return {
      result: "error",
      reason: "Invalid credentials",
    };
  }
};
```

#### Registration hook

```typescript
const registerUser = async ({
  email,
  username,
  password,
}: Credentials): Promise<RequestResult> => {
  const salt = srp.generateSalt();
  const privateKey = srp.derivePrivateKey(salt, email, password);
  const verifier = srp.deriveVerifier(privateKey);

  // make request on /v1/auth/register
  return registerRequest({
    username,
    email,
    salt,
    verifier,
  })
    .unwrap()
    .then((): RequestResult => {
      return { result: "success" };
    })
    .catch((error) => {
      return { result: "error", reason: error?.data?.message };
    });
};
```

### Backend implementation

#### Login

```typescript
async login({ email }: LoginUserBodyDto) {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      return {
        salt: srpClient.generateSalt(),
        serverPublicKey: srpClient.generateEphemeral().public,
      };
    }

    const serverEphemeral = srpServer.generateEphemeral(user.verifier);

    await this.usersRepository.update(
      { email },
      { serverEphemeral },
    );

    return { salt: user.salt, serverPublicKey: serverEphemeral.public };
}
```

#### Verify

```typescript
  async verify({ email, clientProof, clientPublicKey }: VerifyUserBodyDto) {
    const user = await this.usersRepository.findOne({
      where: [{ email }],
    });

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const { salt, verifier, serverEphemeral } = user;

    const serverSession = srpServer.deriveSession(
      serverEphemeral.secret,
      clientPublicKey,
      salt,
      email,
      verifier,
      clientProof,
    );

    const token = this.jwtService.sign({ email });

    return { serverProof: serverSession.proof, token };
  }
```

#### Register

```typescript
  async register({ salt, email, username, verifier }: RegisterUserBodyDto) {
    const existingUser = await this.usersRepository.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    await this.usersRepository.save({ salt, email, username, verifier });

    return { message: 'Registration successful' };
  }
```

## Deployed Applications

- **Application:** [Application](https://lizard-772778801149.europe-west3.run.app)
- **API:** [API](https://lizard-438618.lm.r.appspot.com/)
- **API Documentation:** [Documentation](https://lizard-438618.lm.r.appspot.com/api)

## Directory Structure

```
root
├───backend
├───frontend
└───scripts
```

## Requirements

- Node.js
- PostgreSQL
- Google Cloud SDK
- Docker

## Installation

To set up the project locally, follow these steps:

1. **[API](https://github.com/VanoKoliesnik/project-lizard/tree/main/backend#readme#installation)**
2. **[Application](https://github.com/VanoKoliesnik/project-lizard/tree/main/frontend#readme#installation)**
