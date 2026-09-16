import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import CollectionsPage from './pages/CollectionsPage';
import CategoryPage from './pages/CategoryPage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <ScrollToTop />
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/collections"
          element={<CollectionsPage />}
        />

        <Route
          path="/category/:slug"
          element={<CategoryPage />}
        />

        <Route
          path="/shop"
          element={<ShopPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductPage />}
        />

        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<Home />}
        />
      </Routes>

      {/* Floating WhatsApp Button - visible on every page */}
      <WhatsAppButton />

      <Footer />
    </>
  );
}

export default App;
