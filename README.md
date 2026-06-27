# Dynamic Portfolio CMS — Project 1 ("Slate & Amber" theme)

A fully dynamic MERN stack portfolio website with a hidden admin panel.
All content is managed through the admin dashboard — nothing is hardcoded.

## Tech Stack
- React.js (frontend) + React Router + Axios + Bootstrap
- Node.js + Express.js (backend)
- MongoDB + Mongoose
- JWT Authentication + bcrypt password hashing

## Folder Structure
```
portfolio-1/
├── backend/
│   ├── config/         (MongoDB connection)
│   ├── controllers/    (business logic for each resource)
│   ├── middleware/     (JWT auth + error handling)
│   ├── models/         (Mongoose schemas)
│   ├── routes/         (Express routes)
│   ├── utils/          (admin seed script)
│   ├── .env.example
│   └── server.js
└── frontend/
    └── src/
        ├── components/public/   (portfolio sections)
        ├── components/admin/    (admin dashboard pages)
        ├── context/             (auth state)
        └── utils/                (API client, hidden access hook)
```

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended) installed
- MongoDB installed locally OR a free MongoDB Atlas cluster

### 1. Backend Setup
```bash
cd backend
npm install
```

Edit `.env` (copy from `.env.example` if needed) and set your MongoDB connection string:
```
MONGO_URI=mongodb://127.0.0.1:27017/portfolio_db_1
```
If using MongoDB Atlas, paste your Atlas connection string instead.

Seed the default admin account (run once):
```bash
npm run seed
```
This creates an admin with:
- Username: `admin`
- Password: `Admin@123`

**Change this password immediately after your first login**, using Account Settings in the admin dashboard.

Start the backend:
```bash
npm run dev
```
Backend runs on **http://localhost:5001**

### 2. Frontend Setup
Open a second terminal:
```bash
cd frontend
npm install
npm start
```
Frontend runs on **http://localhost:3000**

### 3. Accessing the Portfolio
Visit **http://localhost:3000** — it will show empty sections until you add content via the admin panel.

### 4. Accessing the Hidden Admin Panel
There is no visible "Admin Login" link anywhere on the site. Use ONE of these two secret methods:

**Method 1 — Keyboard shortcut (desktop):**
Press `Ctrl + Shift + A` anywhere on the portfolio page.

**Method 2 — Hidden multi-click (works on any device):**
Click the copyright text in the footer (e.g. "© 2026 Portfolio. All rights reserved.") **5 times within 2 seconds**.

Both methods take you to: `http://localhost:3000/portal-x9k2-secure-access`

Log in with the admin credentials above.

### 5. Using the Admin Dashboard
Once logged in, you can manage:
- Profile & Hero (name, designation, intro, resume link, about description)
- Skills (add/edit/delete)
- Projects (add/edit/delete — GitHub/demo links optional)
- Experience (add/edit/delete)
- Certificates (add/edit/delete — verification link optional)
- Achievements (add/edit/delete)
- Education (add/edit/delete)
- Contact Information (edit)
- Account Settings (change password)

Any content you add appears immediately on the public portfolio. Anything you delete disappears immediately. No code changes are ever required.

## Important Security Note
Before deploying this publicly:
1. Change the default admin password immediately.
2. Change `JWT_SECRET` in `.env` to a long, random string.
3. Consider changing the secret admin URL path (`/portal-x9k2-secure-access`) in `App.js` and the hook file to something only you know.
4. Use HTTPS in production.
