# Quick Start Guide

## Project Created ✅

Your React + Vite "Hello" app is ready! Here's what we have:

- **Simple App**: Displays "Hello!" in the center of the screen
- **Built with Vite**: Fast development and production builds
- **GitHub Pages Ready**: Pre-configured for deployment

## Local Development

### 1. Start Development Server
```bash
npm run dev
```
Your app will be available at `http://localhost:5174/simple_app/`

### 2. Make Changes
Edit `src/App.jsx` to customize your app. Changes will reload automatically (Hot Module Replacement).

### 3. Build for Production
```bash
npm run build
```
Creates optimized files in the `dist/` folder.

## Deploy to GitHub Pages - Step by Step

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name: `simple_app` (or your project name)
3. Make it **Public**
4. Click **Create repository**

### Step 2: Connect Your Project to GitHub
Replace `USERNAME` with your GitHub username:
```bash
git init
git add .
git commit -m "Initial commit: Hello React app"
git remote add origin https://github.com/USERNAME/simple_app.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 4: Wait for Deployment
GitHub will automatically:
- Build your app using the workflow in `.github/workflows/deploy.yml`
- Deploy to GitHub Pages
- Show a green checkmark when complete

### Step 5: View Your App
After 2-3 minutes, visit:
```
https://USERNAME.github.io/simple_app/
```

## Update Your App

Every time you push changes to `main`:
1. GitHub Actions runs automatically
2. Builds your app
3. Deploys to GitHub Pages

Just commit and push:
```bash
git add .
git commit -m "Your message"
git push
```

## Important Notes

- ⚠️ Change `base: '/simple_app/'` in `vite.config.js` if your repo has a different name
- 🔄 GitHub Pages deployment takes 2-3 minutes
- 📱 Your app is public - anyone can access it
- 🚀 Automated with GitHub Actions - no manual deployment needed

## Troubleshooting

| Issue | Solution |
|-------|----------|
| App shows 404 | Clear browser cache, check base path in vite.config.js |
| Styles missing | Ensure relative paths in CSS files |
| Build fails | Check GitHub Actions tab for error details |
| Changes not visible | Wait 2 minutes, clear cache, check deployment status |

## File Structure

```
.github/
  └── workflows/
      └── deploy.yml           ← Automated deployment
src/
  ├── App.jsx                  ← Your main component
  ├── App.css                  ← Component styles
  ├── main.jsx                 ← Entry point
  └── index.css                ← Global styles
vite.config.js                 ← Vite + base path config
README.md                       ← Project documentation
GITHUB_PAGES_DEPLOYMENT.md     ← Detailed deployment guide
```

## Next Steps

1. ✅ Build completed successfully
2. ✅ GitHub Pages configured
3. ⏭️ Create GitHub repository and connect your code
4. ⏭️ Push to main branch
5. ⏭️ View your live app!

---

For more details, see:
- [README.md](./README.md) - Project overview
- [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) - Detailed deployment guide
