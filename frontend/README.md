<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
=======
# Pankaj Jewellers — React + Vite Frontend (Multi-page)

## Run karण्यासाठी
```bash
npm install
npm run dev
```
Browser madhe http://localhost:5173 open hoil.

## Production build
```bash
npm run build
npm run preview
```

## Pages / Routing (react-router-dom)
- `/` — Home (hero, collections preview, diamond banner, new arrivals)
- `/collections` — Sagle categories, click kelyavar tya category chi products page ughadte
- `/category/:slug` — Ek category che sagle products (e.g. `/category/rings`)
- `/shop` — Sagle products, category filter sobat
- `/product/:id` — Product detail page — price, purity, weight, description, related products
- `/about` — About Us
- `/contact` — Contact form + store details

## Navbar
Home, Collections, Shop, About Us, Contact — sagle links actually working ahet (Offers page nahi thevla).

## Notes
- Product data `src/data/products.js` madhe central place la ahe — navin product add karायला fakt tya file madhe entry add kara.
- "Add to Cart" button product cards madhe purposefully NAHI thevla ahe.
- Sagle jewellery images Unsplash varun (runtime la load hotat, internet connection lागel).
>>>>>>> 86e4999 (Foundation Setup)
