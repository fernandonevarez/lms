# Contributing to this Project

This document plans to outline the following for _all_ contributors of this project. Please follow these guidelines to the best of your knowledge and understanding, and feel free to message `@fernandonevarez` if you have any questions or need help!

### Table of Contents

1. [Introduction](#introduction)
1. [Chain of Command](#chain-of-command)
1. [Git Flow](#git-workflow)
   - [Branching Model](#branching-model)
   - [Code Review and Testing](#code-review-and-testing)
   - [Commit Message Format](#commit-message-format)
1. [Code of Conduct](#code-of-conduct)
1. [Setup Development Environment](#setup-development-environment)
1. [Other Resources](#other-resources)

---

## Introduction

This project is a modern Learning Management System (LMS) designed to streamline the process of online education, offering robust features like course management, user authentication, content delivery, and progress tracking. Built with Next.js, Tailwind CSS, TypeScript, and Go for scalability, flexibility, and performance.

We are open to contributions from the community to improve and enhance the project. If you have any suggestions, bug fixes, or new features to add, feel free to open an issue or submit a pull request.

## Chain of Command

The project maintainers are responsible for reviewing and merging pull requests, managing issues, and ensuring the project's overall health. If you have any questions or need help, you can reach out to the maintainers which are listed in the [CODEOWNERS](./CODEONWER) file.

## Git Workflow

Our project follows a structured Git flow to ensure that all code changes are reviewed, tested, and integrated smoothly into production. Below is a guide on how we manage our branches and development process:

### Branching Model

1. **Main Branch (`main`)**  
   The `main` branch is the production-ready branch. Only stable, fully tested features and fixes are merged into `main`. Any changes merged into this branch are considered live and production-ready.

2. **Development Branch (`dev`)**  
   The `dev` branch serves as the staging branch. All features and bug fixes are merged into `dev` after review and testing. Once we are confident that `dev` is stable and free from issues, changes are promoted to the `main` branch.

3. **Feature Branches**  
   To work on a new feature or bug fix:

   - **Step 1**: Open an issue in the repository describing the feature or bug.
   - **Step 2**: Create a new branch from `dev`, named after the issue (e.g., `feature-issue-123` or `bugfix-issue-456`).
   - **Step 3**: Develop the feature or fix in this branch.

### Code Review and Testing

Once development is complete, submit a pull request (PR) from your feature branch into `dev`.

A project owner will review the PR. After approval, it will be merged into `dev`.

Changes in `dev` undergo testing to ensure there are no issues.

- **Merging to Production**  
   After testing and confirming that there are no issues in `dev`, the feature or fix will be merged into `main`, making it live in production.

- **Handling Merge Conflicts**  
   Merge conflicts can occur when two branches modify the same part of the codebase. To resolve conflicts:

  - **Step 1**: When pulling the latest changes from `dev` or `main`, Git will notify you if there are conflicts.
  - **Step 2**: Open the files where conflicts are detected. Conflicting code sections will be marked with Git conflict markers:
    ```diff
    <<<<<<< HEAD
    // Your code
    =======
    // Incoming changes
    >>>>>>> branch-name
    ```
  - **Step 3**: Manually resolve the differences between your changes and the incoming changes.
  - **Step 4**: After resolving, mark the files as resolved by running:
    ```bash
    git add <filename>
    ```
  - **Step 5**: Commit the resolved changes:
    ```bash
    git commit -m "Resolved merge conflicts"
    ```
  - **Step 6**: Push the resolved changes to your branch and update the pull request.

  **Note**: Always communicate with the team if you're unsure about the resolution or if the conflict involves complex logic.

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org) specification for commit messages to maintain a clear and consistent history. This format ensures commits are descriptive and easy to understand.

A commit message should follow this structure:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### **Type**

The `type` should reflect the nature of the change. The most common types are:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation-only changes
- **style**: Code style changes (e.g., formatting, missing semicolons)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **test**: Adding or correcting tests
- **chore**: Changes to the build process or auxiliary tools

#### Scope

The `scope` is optional but can be used to indicate the section of the project being changed (e.g., `auth`, `api`, `ui`).

#### Description

The description should be concise and written in the imperative mood (e.g., "add feature," "fix bug").

#### Examples

- `feat: add user authentication`
- `feat(auth): add user authentication`
- `fix: resolve login button not working`
- `fix(ui): resolve login button not working`
- `docs: update README with new screenshots`
- `style: format all code with Prettier`
- `refactor: extract helper function for API calls`
- `test: add integration tests for user routes`
- `chore: update dependencies to latest versions`

---

## Code of Conduct

We expect all contributors to adhere to the project's Code of Conduct. Please read the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) file for details on our expectations and guidelines for participation.

## Setup Development Environment

### Requirements

- pnpm - [Install Instructions](https://pnpm.io/installation)
- Node.js - [Install Instructions](https://nodejs.org/en/)
- Go - [Install Instructions](https://golang.org/doc/install)

Alternatively, you can install both requirements with a package manager - [homebrew](https://brew.sh/) (macOS) or [chocolatey](https://chocolatey.org/) (Windows).

### Getting Started

1. **Clone the repository**:

```bash
  git clone https://github.com/fernandonevarez/lms.git
```

2. **Install dependencies**:

```bash
  cd lms
  pnpm install
```

3. **Start the development server**:

```bash
  pnpm dev
```

### Environment Variables

Create a `.env` file in the root directory with the same structure as `.env.example`. You can copy the contents of `.env.example` and replace the values with the appropriate configuration.

## Other Resources

- Installing Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Git Basics: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- GitHub - Creating a Pull Request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
