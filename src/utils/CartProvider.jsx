/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getCart } from "../components/LocalStorage";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(getCart().length);
  const [cartQuantity, setCartQuantity] = useState({});

  const updateCartCount = () => {
    const length = JSON.parse(localStorage.getItem("carts")).length;
    setCartCount(length);
  };
  return (
    <CartContext.Provider
      value={{
        cartCount,
        updateCartCount,
        cartQuantity,
        setCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartInfo = () => {
  return useContext(CartContext);
};
