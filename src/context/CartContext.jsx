import React, { createContext, useContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";

// - Creates a new context for cart management
const CartContext = createContext();

const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// Initialize state with items and total from localStorage
const getInitialState = () => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  return {
    items,
    total: calculateTotal(items),
  };
};

function cartReducer(state, action) {
  let newItems;

  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const newTotal = calculateTotal(newItems);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return {
        items: newItems,
        total: newTotal,
      };
    }

    case "REMOVE_FROM_CART": {
      newItems = state.items.filter((item) => item.id !== action.payload.id);
      const newTotal = calculateTotal(newItems);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return {
        items: newItems,
        total: newTotal,
      };
    }

    case "UPDATE_QUANTITY": {
      newItems = state.items
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      const newTotal = calculateTotal(newItems);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return {
        items: newItems,
        total: newTotal,
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Added to cart");
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.success("Removed from cart");
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: parseInt(quantity) },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        total: state.total,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
