# 📘 Study Corner

**Study Corner** is a clean, responsive educational web app built using **Node.js**, **Express**, **EJS**, and **Bootstrap 5** — perfect for students, alumni, or any learning-focused community.  
It uses a reusable layout, modular header and footer partials, and is fully mobile/tablet/desktop responsive.

---

## 🚀 Features

- ✅ Node.js + Express + EJS
- ✅ Bootstrap 5 styling only (no custom CSS)
- ✅ Reusable `layout.ejs` for all pages
- ✅ Optional `header.ejs` and `footer.ejs` includes
- ✅ Sticky header and footer
- ✅ Responsive for Mobile, Tablet, and PC
- ✅ Expandable JS and Media support (folders included)
- ✅ Easy to deploy on Render or GitHub

---

## 📁 Project Structure

```
study-corner/
├── server.js
├── package.json
├── views/
│   ├── layout.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── home.ejs
│       ├── about.ejs
│       └── contact.ejs
├── public/
│   ├── js/
│   │   ├── darkmode.js
│   │   ├── transition.js
│   │   └── notifications.js
│   └── media/
│       └── (your optional images/videos)
├── README.md
```

---

## 📦 Dependencies

- express
- ejs
- express-ejs-layouts

---

## 🛠 Installation & Usage

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/study-corner.git
cd study-corner
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

Open in your browser: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy to Render (Free Hosting)

1. Push your project to a **GitHub** repository.
2. Go to [https://render.com](https://render.com)
3. Click **"New Web Service"**
4. Choose **GitHub** → Select your repo
5. Fill in:
   - Environment: **Node**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Root Directory: (leave blank)
6. Click **Deploy**

> Render will auto-install dependencies and run your app.

---

## 🧠 EJS Usage Pattern

Each page includes this pattern:

```ejs
<% layout('layout') %>
<%- include('../partials/header', { pageTitle: "Page Title", notificationCount }) %>

<main class="flex-fill container py-4">
  <!-- Page Content -->
</main>

<%- include('../partials/footer') %>
```

Use `header.ejs` and `footer.ejs` only where needed.

---

## 📄 Pages Summary

### `/` → Home

```ejs
<% layout('layout') %>
<%- include('../partials/header', { pageTitle: "Home", notificationCount }) %>

<main class="flex-fill container py-4">
  <h2>Welcome to Study Corner</h2>
  <p>This is the homepage where your study journey begins!</p>
</main>

<%- include('../partials/footer') %>
```

### `/about` → About

```ejs
<% layout('layout') %>
<%- include('../partials/header', { pageTitle: "About Us" }) %>

<main class="flex-fill container py-4">
  <h2>About Study Corner</h2>
  <p>Study Corner is an educational platform built for students and alumni.</p>
</main>

<%- include('../partials/footer') %>
```

### `/contact` → Contact

```ejs
<% layout('layout') %>
<%- include('../partials/header', { pageTitle: "Contact Us" }) %>

<main class="flex-fill container py-4">
  <h2>Contact Study Corner</h2>
  <p>Email us at: <strong>contact@studycorner.com</strong></p>
</main>

<%- include('../partials/footer') %>
```

---

## 📜 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

---

## ✨ Author

Made with ❤️ by **[Your Name or GitHub Handle]**

> Want to add more features like chat, memory sharing, Firebase auth? Let’s build together!
