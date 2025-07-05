<<<<<<< HEAD
# Fundify – MERN Crowdfunding Platform (Starter)

This is a **starter codebase** for Fundify, a simple crowdfunding platform built with the MERN stack.

## Features
- Email/password authentication (JWT)
- Create campaigns
- Fake contributions (no real payment gateway)
- Admin panel to approve campaigns
- Tailwind‑powered React frontend

## Quick Start

### Prerequisites
- Node.js (18+ recommended)
- MongoDB (local or Atlas)

### 1. Clone & Install
```bash
git clone <YOUR_GITHUB_REPO_URL> fundify
cd fundify

# install backend
cd server
npm install

# install frontend
cd ../client
npm install
```

### 2. Environment Variables
Copy `.env.example` inside **/server** to `.env` and fill in:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
PORT=5000
```

### 3. Run Development Servers
```bash
# In /server
npm run dev

# In /client
npm run dev
```

API: `http://localhost:5000`  
Frontend: `http://localhost:5173`

### 4. Deploying
Push this repo to GitHub, then:
- Backend → Render/Railway (Node build)
- Frontend → Vercel/Netlify (Static)

Enjoy hacking on Fundify! ✨
=======
# Fundify
a sample website for crowdfunding
>>>>>>> fd7ad22f70742b6fd79900ba351c5295b07421aa
