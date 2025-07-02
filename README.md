# Node + TypeScript + Bootstrap Web Service

This is a basic Node.js web service using TypeScript and Bootstrap 5 to render a homepage.

## 🚀 Deployment Instructions

### 🟪 Render

1. Go to [https://render.com](https://render.com)
2. Click **New Web Service**
3. Connect your GitHub repo or upload code
4. Set:
   - Build Command: `npm run build`
   - Start Command: `npm start`

### 🌿 Heroku

1. Install Heroku CLI
2. Run:
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

### ▲ Vercel

> Vercel is better for frontend, but can still be used for Express apps with `vercel.json`

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### 🌐 Netlify

> Netlify doesn’t support Node backends directly. Use Netlify Functions or host frontend only.

---

## 🔧 Local Dev

```bash
npm install
npm run build
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)