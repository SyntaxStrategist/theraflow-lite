# TheraFlow Lite - Setup Notes

## What Was Built

A complete React + TypeScript therapy practice management application with:

### Tech Stack
- **React 18.2** with TypeScript
- **Vite** - Fast development server
- **Redux Toolkit** - State management
- **React Router v7** - Client-side routing
- **Styled Components** - CSS-in-JS styling

### Features Implemented

#### 1. Authentication System
- Login page with form validation
- Redux-based auth state management
- Protected routes that redirect to login if not authenticated
- User session persistence

#### 2. Pages
- **Login** - Beautiful purple gradient design
- **Dashboard** - Statistics overview, recent clients
- **Clients** - Grid view of all clients with search bar
- **Client Details** - Detailed view of individual clients

#### 3. Layout Components
- **Sidebar** - Dark-themed navigation with active link highlighting
- **Header** - User info display with logout functionality
- **Layout** - Responsive wrapper combining sidebar and header

#### 4. Sample Data
- 3 pre-populated client records
- Client information includes: name, email, phone, status, last session, notes

## Known Issues Fixed

### Redux Toolkit Import Issue
**Problem:** `PayloadAction` and `TypedUseSelectorHook` couldn't be imported directly.

**Solution:** Changed imports to use `type` imports:
```typescript
// Before (caused errors)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// After (works correctly)
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
```

### Port Conflicts
The app runs on `http://localhost:5173` by default. If that port is in use, Vite will try another port (like 5174).

## How to Use

### Start Development Server
```bash
npm run dev
```

### Login
1. Navigate to `http://localhost:5173`
2. Enter any name and email (demo mode)
3. Click "Sign In"

### Navigation
- **Dashboard** - View statistics and recent activity
- **Clients** - Browse all clients, click cards for details
- **Client Details** - View/edit individual client information
- **Logout** - Sign out and return to login

### Build for Production
```bash
npm run build
npm run preview
```

## File Structure

```
src/
├── components/
│   └── Layout/
│       ├── Header.tsx       # Top header with user info
│       ├── Sidebar.tsx      # Left navigation sidebar
│       └── Layout.tsx       # Main layout wrapper
├── pages/
│   ├── Login.tsx           # Login page
│   ├── Dashboard.tsx       # Dashboard overview
│   ├── Clients.tsx         # Clients list
│   └── ClientDetails.tsx   # Individual client details
├── store/
│   ├── store.ts            # Redux store configuration
│   ├── hooks.ts            # Typed Redux hooks
│   └── slices/
│       ├── authSlice.ts    # Authentication state
│       └── clientsSlice.ts # Clients data management
├── App.tsx                 # Main app with routing
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Next Steps / Future Enhancements

- Add real API integration
- Implement add/edit/delete client functionality
- Add session scheduling and calendar
- Create reports and analytics
- Add notes and documentation features
- Implement real authentication (OAuth, JWT)
- Add user profile management
- Create appointment reminders
- Add file uploads for client documents

## Development Notes

- Clear Vite cache if you encounter issues: `rm -rf node_modules/.vite`
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
- Check browser console (F12) for runtime errors
- All routes except `/login` are protected and require authentication

---

Built with ❤️ using React, TypeScript, and modern web technologies.

