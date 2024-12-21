import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Gift, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Gift className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              GiftCraft
            </span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center px-8">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/wishlist"
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <Heart className="h-6 w-6 text-gray-600" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
