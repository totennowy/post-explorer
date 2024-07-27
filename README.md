# Post Explorer

![Post Explorer](https://path-to-your-logo-or-screenshot.png)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## About

**Post Explorer** is a simple demo project that displays a table with data fetched from a free endpoint. The application includes a filter for authors, pagination, and a selection of items per page. It is built with React and TypeScript and includes comprehensive test coverage using Jest and React Testing Library.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/totennowy/post-explorer.git
   ```
2. Install NPM packages

   ```sh
   npm install
   # or if you use yarn
   yarn install
   ```

3. Create a `.env` file in the root directory and add your environment variables.
   ```env
   VITE_API_URL=https://api.example.com
   ```

### Usage

To start the development server:

```sh
npm run dev
# or if you use yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```plaintext
post-explorer/
├── node_modules/
├── public/
├── src/
│   ├── assets/             # Static assets like images and icons
│   ├── components/         # Reusable UI components
│   │   ├── pagination/
│   │   ├── rows-per-page/
│   │   ├── skeleton-loader/
│   │   ├── table-error/
│   │   └── table-filter/
│   ├── pages/              # Page components
│   │   └── home/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── Home.test.tsx
│   │       └── Home.tsx
│   ├── styles/             # Global styles
│   ├── App.test.tsx        # Tests for App component
│   ├── App.tsx             # Main application component
│   ├── main.test.tsx       # Tests for main entry point
│   ├── main.tsx            # Entry point of the application
│   ├── setupTests.ts       # Test setup file
│   └── vite-env.d.ts       # Vite environment type definitions
├── .env                    # Environment variables
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── index.html              # HTML template
├── jest.config.cjs         # Jest configuration
├── package-lock.json       # Package lock file
├── package.json            # Package configuration
├── README.md               # Project documentation
├── tsconfig.app.json       # TypeScript configuration for app
├── tsconfig.jest.json      # TypeScript configuration for Jest
├── tsconfig.node.json      # TypeScript configuration for Node
└── vite.config.ts          # Vite configuration
```

## Running Tests

To run the tests:

```sh
npm run test
# or if you use yarn
yarn test
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
