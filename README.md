# Mangus Portfolio

Simple instructions to run this React + Vite portfolio locally and a short list of technologies used.

## Run locally (Windows PowerShell)

1. Clone the repo:

```powershell
git clone https://github.com/MangusDev/Portifolio.git
cd mangus-portfolio-react
```

2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```powershell
npm run build
npm run preview
```

## Technologies used

- React
- Vite
- Tailwind CSS (listed in devDependencies)
- ESLint

## Notes

- The `deploy` script in `package.json` uses `gh-pages` and the `homepage` field; install `gh-pages` if you want to deploy to GitHub Pages.
- Update the `homepage` field in `package.json` to `https://<USERNAME>.github.io/<REPO>` before using the `deploy` script.


