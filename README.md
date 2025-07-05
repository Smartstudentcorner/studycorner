# 📚 Study Corner

**Study Corner** is a minimal Node.js app using Express with no frontend—just plain API-style responses. Ready for deployment on [Render](https://render.com) or any other Node hosting platform.

---

## 🚀 Live Demo

> Deploy this on [Render](https://render.com)

---

## 🛠 Setup

```bash
git clone https://github.com/yourusername/study-corner.git
cd study-corner
npm install
```

---

## 🧪 Run Locally

```bash
npm start
```

Then open your browser:

- `http://localhost:3000/` → plain text: "Welcome to Study Corner!"
- `http://localhost:3000/api` → JSON response: `{ message: "Study Corner API is running!" }`

---

## 🌍 Deploy to Render

To deploy this app on Render:

1. Push your project to GitHub (public or private)
2. Go to [https://render.com](https://render.com)
3. Click **"New" > "Web Service"**
4. Connect your GitHub repo
5. Fill in the required details:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Click **Deploy**

Render will automatically use the `PORT` environment variable.

---

## 📁 Folder Structure

```
study-corner/
├── server.js          # Express server
├── package.json       # App config and dependencies
├── .gitignore         # Ignored files
└── README.md          # Project instructions
```

---

## 📜 License

This project is licensed under the **MIT License**.
