# Node TypeScript Web Service

## Description
This is a sample Node.js project using TypeScript to run a basic Express web server.

## Scripts
- `npm run dev`: Run in development mode with auto-reloading.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm start`: Run the compiled JavaScript code from `dist`.

## Deployment (Render.com)
1. Push your code to GitHub.
2. Visit [Render](https://render.com/).
3. Create a new Web Service:
   - Connect your GitHub repo.
   - Select your repo.
   - Set build command: `npm install && npm run build`
   - Set start command: `npm start`
   - Choose Node version (e.g. 18+).
4. Click Deploy.

Render will automatically build and deploy your service.

## Endpoint
- `GET /` - returns a hello message.
