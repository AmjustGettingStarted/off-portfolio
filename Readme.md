# HMV Portfolio - TEST

A modern, full-stack portfolio web application featuring a responsive UI, animated transitions, and a Node.js backend. Built with Vite, React, TypeScript, Tailwind CSS, Framer Motion, shadcn-ui, and Express.

---

## Table of Contents

- [Project Info](#project-info)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Monorepo Structure](#monorepo-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Servers](#running-the-development-servers)
- [Project Scripts](#project-scripts)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Custom Domain](#custom-domain)
- [Contributing](#contributing)
- [License](#license)

---

## Project Info

**Live URL:** [https://portfolio-brown-nu-26.vercel.app/](https://portfolio-brown-nu-26.vercel.app/)

A showcase portfolio for developers, featuring a beautiful UI, dark/light theme toggle, and smooth animations. Easily customizable for your own needs.

---

## Features

- Responsive navigation bar with theme toggle (light/dark)
- Animated transitions using Framer Motion
- Mobile-friendly menu and navigation
- Modern UI with Tailwind CSS and shadcn-ui components
- Modular React components for easy customization
- Backend API with Express (Node.js)
- Environment variable support for configuration
- Ready for deployment on Vercel, Netlify, or Lovable

---

## Tech Stack

**Frontend:**

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/) (for accessible UI primitives)
- [Axios](https://axios-http.com/) (for HTTP requests)

**Backend:**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## Monorepo Structure

```
off-portfolio/
│
├── Readme.md                # Project root README
├── Client/                  # Frontend (React)
│   ├── src/                 # React source code
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies & scripts
│   └── ...                  # Config files (Vite, Tailwind, etc.)
│
└── server/                  # Backend (Node.js/Express)
    ├── index.js             # Express server entry
    ├── package.json         # Backend dependencies & scripts
    └── ...                  # Config files
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies for both frontend and backend:

```sh
git clone https://github.com/AmjustGettingStarted/off-portfolio.git
cd off-portfolio

# Install frontend dependencies
cd Client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Running the Development Servers

**Start the backend (Express server):**

```sh
cd server
npm run start
```

By default, the backend runs at [http://localhost:8080](http://localhost:8080).

**Start the frontend (React app):**

Open a new terminal:

```sh
cd Client
npm run dev
```

The frontend runs at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

---

## Project Scripts

**Frontend (`Client/package.json`):**

- `npm run dev` – Start Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code with ESLint

**Backend (`server/package.json`):**

- `npm run start` – Start Express server

---

## Configuration

- **Frontend environment variables:**  
  Place variables in `Client/.env` (see Vite docs for variable naming).
- **Backend environment variables:**  
  Place variables in `server/.env`.

---

## Deployment

You can deploy the frontend and backend separately or together, depending on your hosting provider.

- **Frontend:** Deploy `Client` to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [Lovable](https://lovable.dev/).
- **Backend:** Deploy `server` to [Vercel](https://vercel.com/), [Render](https://render.com/), or [Railway](https://railway.app/).

**Example: Deploying to Vercel**

- Deploy the `Client` folder as a Vercel project (set build command to `npm run build` and output directory to `dist`).
- Deploy the `server` folder as a separate Vercel project (set build command to `npm run start`).

---

## License

This project is for personal portfolio use. Feel free to customize and use it for your own projects.

---

## "Why do programmers prefer dark mode?

Because light attracts bugs!" 🐞🐞🐞

---

💝 HMV 💝
