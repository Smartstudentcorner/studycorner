# 📚 The Study Corner

The Study Corner is a simple and clean Node.js + Express + EJS web app designed for modular templating with **Bootstrap** styling. It features:

- ✅ Layout system using `express-ejs-layouts`
- ✅ Reusable partials (Header & Footer)
- ✅ Pages with or without layout support
- ✅ Clean folder structure

---

## 📁 Folder Structure

```
the-study-corner/
├── app.js
├── package.json
├── public/                   # Static assets (optional)
├── views/
│   ├── layout/
│   │   └── layout.ejs        # Main layout file
│   ├── partials/
│   │   ├── header.ejs        # Reusable header
│   │   └── footer.ejs        # Reusable footer
│   ├── pages/
│   │   ├── home.ejs          # Home page using layout
│   │   └── nolayout.ejs      # Standalone page without layout
```

---

## 🚀 Installation & Run

```bash
# 1. Clone or download the project
# 2. Navigate to the folder
npm install     # Install dependencies
npm start       # Start the app on http://localhost:3000
```

---

## 🌐 Deployment (e.g. Render / Railway / Vercel with Node.js)

1. Make sure your `start` script is set correctly:
```json
"scripts": {
  "start": "node app.js"
}
```

2. Push to GitHub (or your Git provider).

3. Go to [Render](https://render.com), [Railway](https://railway.app), or any Node.js hosting platform.

4. Set up a new **Web Service**, connect your repo, and deploy.

5. Ensure the **Build Command** is:
```
npm install
```

And the **Start Command** is:
```
npm start
```

6. You're live! 🎉

---

## 📄 Pages Overview

| Route             | Description                     | Layout Used? |
|------------------|----------------------------------|--------------|
| `/`              | Home page                        | ✅ Yes        |
| `/nolayout`      | Standalone page (no layout)      | ❌ No         |

---

## 🔧 Tech Stack

- Node.js
- Express.js
- EJS Templating
- express-ejs-layouts
- Bootstrap 5 CDN (no custom CSS)

---

## ✨ Author

Made with 💙 for JNV alumni, students, and developers.