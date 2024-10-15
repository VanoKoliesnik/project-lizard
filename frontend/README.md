# Frontend Application

![React](https://img.shields.io/badge/React-v18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-v5.4.9-brightgreen)
![Redux](https://img.shields.io/badge/Redux-v9.1.2-purple)
![Docker](https://img.shields.io/badge/Docker-blue)
![Cloud Run](https://img.shields.io/badge/Deployed_on-Cloud_Run-orange)

## Deployed Application

Application is deployed on Google Cloud Run. You can access the live version using the following link:

[Application](https://lizard-772778801149.europe-west3.run.app)

## Stack

- **React**
- **Vite**
- **Redux**
- **Docker**
- **Deployed on Cloud Run** (Triggered by GitHub merge to `main` via Dockerfile)

## Pages

- **Login**
- **Registration**
- **Profile**

## Example .env file

```
VITE_API_URL=http://backend
VITE_API_VERSION=v1
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VanoKoliesnik/project-lizard.git

   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   yarn start
   ```

4. **Open your browser:** Navigate to http://localhost:3000 (or the port specified in your Vite configuration) to view the application

## Running the Application

- **Development:**

  ```bash
  yarn start
  ```

- **Build:**

  ```bash
  yarn build
  ```

- **Production:**

  ```bash
  yarn serve
  ```

- **Docker:**
  ```bash
  docker build -t lizard-frontend .
  docker run -p 5000:5000 lizard-frontend
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
