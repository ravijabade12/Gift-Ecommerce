import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, total, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <div className="flex items-center gap-4 mb-8">
              <ShoppingBag className="h-8 w-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
            </div>

            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-2">
                Start adding some gifts to your cart!
              </p>
              <Link
                to="/products"
                className="mt-4 inline-block btn btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <div className="flex items-center gap-4 mb-8">
            <ShoppingBag className="h-8 w-8 text-pink-600" />
            <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
          </div>

          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="py-6 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-lg font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${(item.originalPrice * item.quantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(0, item.quantity - 1))
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    className="p-2 text-gray-400 hover:text-red-500"
                    onClick={() => removeFromCart(item)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full btn btn-primary">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
