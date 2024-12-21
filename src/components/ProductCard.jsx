import React from "react";
import { ShoppingCart, Heart, Palette } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-pink-600 text-white text-sm px-3 py-1 rounded-full">
            New
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <button
            className={`text-gray-400 hover:text-pink-600 transition-colors ${
              isInWishlist(product.id) ? "text-pink-600" : ""
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`h-5 w-5 ${
                isInWishlist(product.id) ? "fill-current" : ""
              }`}
            />
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-3">{product.description}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {product.customization && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Palette className="h-4 w-4" />
            <span>Customization available</span>
          </div>
        )}

        <button
          className="w-full btn btn-primary flex items-center justify-center gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
