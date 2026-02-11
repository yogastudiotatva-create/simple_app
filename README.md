# Simple Hello App - React + Vite

A simple React application built with Vite that displays "Hello!" text. This project is configured for easy deployment to GitHub Pages.

## Features

- ⚡ **Fast Development** - Powered by Vite
- ⚛️ **React 18** - Latest React features
- 🚀 **GitHub Pages Ready** - Pre-configured for deployment
- 📱 **Responsive Design** - Centered "Hello!" display

## Getting Started

### Installation

Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

### Build

Create a production build:
```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment to GitHub Pages

For detailed deployment instructions, see [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md).

**Quick Summary:**
1. Build the app: `npm run build`
2. Create a GitHub repository
3. Push your code to GitHub
4. Enable GitHub Pages in repository settings
5. Your app will be live at `https://YOUR_USERNAME.github.io/simple_app/`

## Project Structure

```
simple_app/
├── src/
│   ├── App.jsx           # Main React component
│   ├── App.css           # Component styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies
└── index.html            # HTML template
```

## Next Steps

1. Customize the "Hello!" message in `src/App.jsx`
2. Add more components and pages
3. Deploy to GitHub Pages
4. Add more styling as needed

## Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
