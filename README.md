# TheraFlow Lite

A modern therapy practice management application built with React, TypeScript, and Redux Toolkit.

## Features

- 🔐 **Authentication**: Simple login system with Redux state management
- 📊 **Dashboard**: Overview of clients, sessions, and statistics
- 👥 **Client Management**: View, search, and manage client information
- 📝 **Client Details**: Detailed view of individual client records
- 🎨 **Modern UI**: Clean and responsive design with styled-components
- 🛣️ **Routing**: Protected routes and seamless navigation

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Layout/         # Layout components (Sidebar, Header, Layout)
├── pages/              # Page components
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Clients.tsx
│   └── ClientDetails.tsx
├── store/              # Redux store configuration
│   ├── store.ts
│   ├── hooks.ts
│   └── slices/         # Redux slices
│       ├── authSlice.ts
│       └── clientsSlice.ts
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Usage

### Login

The application starts with a login page. Enter any name and email to access the dashboard (demo mode).

### Navigation

- **Dashboard**: View statistics and recent client activity
- **Clients**: Browse all clients, search, and view details
- **Client Details**: Click on any client to see detailed information

### Features in Development

- Add/Edit/Delete clients
- Session tracking and scheduling
- Notes and documentation
- Reports and analytics

## License

This is a demo project for learning purposes.
