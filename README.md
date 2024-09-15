# Learning Management System (LMS)

A modern Learning Management System (LMS) designed to streamline the process of online education, offering robust features like course management, user authentication, content delivery, and progress tracking. Built with Next.js, Tailwind CSS, TypeScript, and Go for scalability, flexibility, and performance.

## Features

- **Course Management**: Easily create and organize online courses.
- **User Authentication**: Secure user login with role-based access (students, instructors, admins).
- **Content Delivery**: Upload and manage educational resources like videos, documents, and quizzes.
- **Progress Tracking**: Track student progress with built-in analytics and reporting tools.
- **Responsive Design**: Optimized for both mobile and desktop use with Tailwind CSS.
- **Scalable Architecture**: Leverage Go for a performant backend and TypeScript for type-safe development.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Go](https://golang.org/), REST API architecture
- **Database**: [PostgreSQL](https://www.postgresql.org/), [GORM](https://gorm.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- Go (Golang)

### Installation

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

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements to the project.

we are using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. So Please follow the commit message format.

```bash
git commit -m "feat: added new feature"
```

You can learn more about contributing in the [Contribution Guidelines](./CONTRIBUTING.md).

## License

This project is licensed under the GNU GPLv3 License. See the LICENSE file for more details.
