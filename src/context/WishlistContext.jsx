import React, { createContext, useContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem("wishlist")) || [],
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const newItems = [...state.items, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(newItems));
      return { ...state, items: newItems };
    }
    case "REMOVE_FROM_WISHLIST": {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("wishlist", JSON.stringify(newItems));
      return { ...state, items: newItems };
    }
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (product) => {
    if (state.items.some((item) => item.id === product.id)) {
      toast.error("Already in wishlist");
      return;
    }
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    toast.success("Added to wishlist");
  };

  const removeFromWishlist = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    toast.success("Removed from wishlist");
  };

  const isInWishlist = (productId) => {
    return state.items.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
