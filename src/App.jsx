import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import SeasonalPromotions from "./components/SeasonalPromotions";
import Testimonials from "./components/Testimonials";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./components/ScrollToTopComponent";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <SeasonalPromotions />

        <Testimonials />
        <InstagramFeed />
      </main>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <ScrollToTop />

          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
