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
- Wishlist (heart icon) navbar madhe count dakhavto ani `/wishlist` page var save kelele products dispay hotat. Wishlist browser madhech (localStorage) save hoto.
- "Add to Cart" button product cards madhe purposefully NAHI thevla ahe.
- Sagle jewellery images Unsplash varun (runtime la load hotat, internet connection lागel).
