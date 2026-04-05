import { useEffect, useState } from "react";
import { buildCartItem, getCartCountForProduct } from "../utils/menuCart";

const STORAGE_KEY = "la-federal-cart";

function readCart() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function useCart() {
  const [cart, setCart] = useState(readCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignorar fallos de almacenamiento local.
    }
  }, [cart]);

  function addToCart(item, additions = item.additions || {}, quantity = 1) {
    const cartItem = buildCartItem(item, additions);
    setCart((prev) => ({
      ...prev,
      [cartItem.key]: prev[cartItem.key]
        ? { ...prev[cartItem.key], qty: prev[cartItem.key].qty + quantity }
        : { ...cartItem, qty: quantity }
    }));
  }

  function removeFromCart(key) {
    setCart((prev) => {
      if (!prev[key]) return prev;
      if (prev[key].qty <= 1) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: { ...prev[key], qty: prev[key].qty - 1 } };
    });
  }

  function deleteFromCart(key) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function clearCart() {
    setCart({});
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    getProductQty: (productName) => getCartCountForProduct(cart, productName)
  };
}
