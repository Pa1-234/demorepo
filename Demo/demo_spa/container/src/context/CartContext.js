import { useState, createContext, useEffect } from "react";
import { getUserCart } from "../../../container/src/api-helper/frontend/util";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getUserCart(1)
      .then((data) => setCart(data.items))
      .catch((err) => setCart([]));
  }, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
