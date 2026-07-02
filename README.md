# My Portfolio Website — Deployment Info

## Live URLs

| | URL |
|---|---|
| **Portfolio Website** | https://port-folio-tawny-eight-10.vercel.app |
| **Backend API** | https://portfolio-1-q3lv.onrender.com |

---

## Tech Stack
- **Frontend:** React.js + Bootstrap → deployed on **Vercel**
- **Backend:** Node.js + Express.js → deployed on **Render**
- **Database:** MongoDB Atlas (cloud)
- **Auth:** JWT + bcrypt password hashing

---

## Accessing the Admin Panel

The admin panel is **hidden** — no visible login link exists anywhere on the portfolio.

### Secret Access Methods (only you know these):

**Method 1 — Keyboard shortcut (desktop):**
Press `Ctrl + Shift + A` anywhere on the portfolio page.

**Method 2 — Hidden click (mobile/any device):**
Click the **footer copyright text** (e.g. "© 2026 Portfolio. All rights reserved.") **5 times quickly** (within 2 seconds).

Both methods take you to the hidden admin login page.

### Admin Login Credentials:
- **Username:** (the `ADMIN_DEFAULT_USERNAME` you set on Render)
- **Password:** (the `ADMIN_DEFAULT_PASSWORD` you set on Render)

> ⚠️ Keep these credentials private. Change the password from Account Settings inside the dashboard after logging in.

---

## How to Manage Your Portfolio Content

1. Visit https://port-folio-tawny-eight-10.vercel.app
2. Use `Ctrl+Shift+A` (or 5x click footer) to access admin login
3. Log in with your credentials
4. From the admin dashboard, you can manage:
   - **Profile & Hero** — name, designation, intro, resume link
   - **About** — your description
   - **Skills** — add/edit/delete skills
   - **Projects** — add/edit/delete with GitHub & live demo links
   - **Experience** — company, role, duration, description
   - **Certificates** — with optional verification links
   - **Achievements** — title and description
   - **Education** — degree, college, year
   - **Contact Info** — email, phone, LinkedIn, GitHub, other links
   - **Account Settings** — change your admin password

All changes appear **instantly** on the live portfolio — no code changes needed, ever.

---

## Hosting Details

### Frontend (Vercel)
- **Platform:** https://vercel.com
- **Project:** port-folio (connected to GitHub repo `PortFolio`, `frontend` subfolder)
- **Environment Variables:**
  ```
  REACT_APP_API_URL=https://portfolio-1-q3lv.onrender.com/api
  ```

### Backend (Render)
- **Platform:** https://render.com
- **Service:** portfolio-1-q3lv (connected to GitHub repo `PortFolio`, `backend` subfolder)
- **Environment Variables on Render:**
  ```
  PORT=10000 (set automatically by Render)
  MONGO_URI=<your Atlas connection string>
  JWT_SECRET=<your long random secret>
  JWT_EXPIRES_IN=7d
  ADMIN_DEFAULT_USERNAME=<your admin username>
  ADMIN_DEFAULT_PASSWORD=<your admin password>
  CLIENT_URL=https://port-folio-tawny-eight-10.vercel.app
  ```

### Database (MongoDB Atlas)
- **Platform:** https://cloud.mongodb.com
- **Database name:** portfolio_db_1
- **Connection:** via MONGO_URI environment variable on Render

---

## Important Notes

- **Render free tier sleeps** after 15 minutes of inactivity. The first request after idle time takes ~30-50 seconds to wake up — this is normal, not a bug.
- **Never commit your `.env` file** to GitHub — it's already in `.gitignore`.
- **To update content:** just log into the admin panel — no code changes or redeployments needed.
- **To update code:** push to GitHub → Render and Vercel auto-redeploy automatically.

---

## Local Development (running on your computer)

### Backend:
```powershell
cd portfolio-1/backend
npm install
npm run dev
```
Runs on http://localhost:5000

### Frontend:
```powershell
cd portfolio-1/frontend
npm install
npm start
```
Runs on http://localhost:3000

Make sure your local `.env` file has:
```
MONGO_URI=mongodb://127.0.0.1:27017/portfolio_db_1
JWT_SECRET=any_local_secret_string
```

---

## Removing the Debug Endpoint (Important Security Step)

A temporary `debug-login` endpoint was added during deployment troubleshooting.
Now that login is working, remove it for security:

1. Go to GitHub → `backend/controllers/authController.js`
2. Delete the entire `debugLogin` function (the last function before `module.exports`)
3. Update `module.exports` at the bottom to:
   ```javascript
   module.exports = { loginAdmin, changePassword, verifyToken, setupAdmin };
   ```
4. Go to GitHub → `backend/routes/authRoutes.js`
5. Remove this line:
   ```javascript
   router.get('/debug-login', debugLogin);
   ```
6. Update the require line to:
   ```javascript
   const { loginAdmin, changePassword, verifyToken, setupAdmin } = require('../controllers/authController');
   ```
7. Commit both files → Render auto-redeploys

---

*Portfolio built with MERN Stack — React.js, Node.js, Express.js, MongoDB*
