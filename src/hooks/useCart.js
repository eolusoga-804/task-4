// This hook manages cart actions, browser persistence, and order calculations.
import { useEffect, useReducer } from "react";
import { storeContent } from "../data/storeContent";

const { storageKey, taxRate, shippingThreshold, shippingFee } =
  storeContent.cart;

// This reducer updates cart items for add, remove, and quantity actions.
function cartReducer(items, action) {
  if (action.type === "add") {
    const existingItem = items.find((item) => item.id === action.product.id);

    if (existingItem) {
      return items.map((item) =>
        item.id === action.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }

    return [...items, { ...action.product, quantity: 1 }];
  }

  if (action.type === "remove") {
    return items.filter((item) => item.id !== action.productId);
  }

  if (action.type === "update-quantity") {
    if (action.quantity <= 0) {
      return items.filter((item) => item.id !== action.productId);
    }

    return items.map((item) =>
      item.id === action.productId
        ? { ...item, quantity: action.quantity }
        : item,
    );
  }

  if (action.type === "clear") {
    return [];
  }

  return items;
}

// This function restores a valid cart from browser storage.
function loadSavedCart() {
  try {
    const savedCart = window.localStorage.getItem(storageKey);
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

// This function calculates subtotal, shipping, tax, and total amounts.
export function calculateTotal(items) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping =
    subtotal === 0 || subtotal >= shippingThreshold ? 0 : shippingFee;
  const tax = subtotal * taxRate;

  return {
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax,
  };
}

export default function useCart() {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadSavedCart);

  // This effect saves cart changes so they persist between visits.
  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {
      // The cart remains usable if browser storage is unavailable.
    }
  }, [items]);

  // These actions provide the cart operations used by the interface.
  function addToCart(product) {
    dispatch({ type: "add", product });
  }

  function removeFromCart(productId) {
    dispatch({ type: "remove", productId });
  }

  function updateQuantity(productId, quantity) {
    dispatch({ type: "update-quantity", productId, quantity });
  }

  function clearCart() {
    dispatch({ type: "clear" });
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    itemCount,
    totals: calculateTotal(items),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}
