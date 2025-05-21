[⬆️ Back to Intermediate workspace](../README.md)

<h1 align="center"><img src="public/task-management-logo.png" width="48" style="vertical-align:middle;"/> <span style="color:#F59E42">EasyTask (Deployment)</span></h1>

<p align="center">
  <b>🗂️ Manage tasks with user-based routing and deployment-ready SSR support.</b>
</p>

---

## 🚀 Quick Start

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Start the app**
   ```sh
   npm start
   ```
   or for live reload:
   ```sh
   ng serve
   ```
3. **Open in your browser:**  
   [http://localhost:4200](http://localhost:4200)

---

## ✨ Project Highlights

- **User-based task management:**  
  Visit routes like `/users/u1/tasks` or `/users/u2/tasks` for user-specific tasks
- **Dynamic Angular routing:**  
  Clean, dynamic URLs for users and tasks
- **Server-side rendering (SSR):**  
  SSR-ready for fast, SEO-friendly deployment
- **Modern UI:**  
  User avatars in `public/users/`
- **Easy deployment:**  
  Express server (`server.ts`) for SSR, ready for Firebase Hosting

---

## 📁 Project Structure

- `src/` – Angular app source code
- `public/` – Static assets (logos, user images)
- `server.ts` – Express SSR server
- `user-routes.txt` – Example user routes

---

## 🌐 Deploy to Firebase Hosting (with SSR)

1. **Install Firebase CLI globally (if needed):**
   ```sh
   npm install -g firebase-tools
   ```
2. **Login to Firebase:**
   ```sh
   firebase login
   ```
3. **Initialize Firebase (in your project folder):**
   ```sh
   firebase init
   ```
   - Select **Hosting** and **Functions** (for SSR)
   - Set `dist/` or your SSR output as the public directory
   - Configure as a single-page app if prompted
4. **Build Angular Universal app:**
   ```sh
   npm run build:ssr
   ```
5. **Deploy:**
   ```sh
   firebase deploy
   ```

**Resources:**

- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Angular SSR Deployment Guide](https://angular.io/guide/universal-deployment)
- [Angular Deployment](https://angular.dev/tools/cli/deployment)
- [Angular Universal (SSR)](https://angular.dev/guide/ssr)

---

<p align="center">
  <b>🟧 Practice Angular routing & deployment in a real-world scenario!</b>
</p>
