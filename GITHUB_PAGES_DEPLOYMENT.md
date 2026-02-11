# GitHub Pages Deployment Guide for React + Vite App

This guide walks you through deploying your React application to GitHub Pages step by step.

## Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed
- Your React application ready to deploy

## Step-by-Step Deployment Instructions

### Step 1: Build Your Application
```bash
npm run build
```
This creates a production-ready version of your app in the `dist/` folder.

### Step 2: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository: `simple_app` (or your project name)
5. Choose "Public" for anyone to see your site
6. Click **Create repository**

### Step 3: Initialize Git in Your Project
If you haven't already, initialize your local repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 4: Connect Your Local Repository to GitHub
Replace `YOUR_USERNAME` with your GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/simple_app.git
git branch -M main
git push -u origin main
```

### Step 5: Configure GitHub Pages Settings
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, scroll down and click **Pages**
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/root` (if using root) or `/docs` (if using docs folder)
5. Click **Save**
6. Wait a few moments for GitHub to build and deploy your site

### Step 6: Access Your Deployed App
After a few minutes, your app will be available at:
```
https://YOUR_USERNAME.github.io/simple_app/
```

## Using a GitHub Action for Automated Deployment

To automate the build and deployment process, create a GitHub Actions workflow:

### Step 1: Create the Workflow Directory
```bash
mkdir -p .github/workflows
```

### Step 2: Create a Deployment Workflow File
Create a file named `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build application
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Step 3: Push the Workflow File
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

Now, every time you push changes to the `main` branch, GitHub Actions will automatically build and deploy your app!

## Troubleshooting

### App Shows 404 After Deployment
- Make sure `base: '/simple_app/'` is set in `vite.config.js`
- Replace `simple_app` with your actual repository name

### Styles Not Loading
- Check that all asset paths are relative
- Ensure base path is correctly configured

### Changes Not Updating
- Clear your browser cache (Ctrl+Shift+Delete)
- Wait a few minutes for GitHub to process the deployment
- Check the Actions tab in your GitHub repository for build status

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Next Steps

1. Customize your app further
2. Add more React components
3. Deploy updates by pushing to the main branch
4. Monitor your GitHub Actions for any build failures
