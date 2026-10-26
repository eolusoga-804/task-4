// This component coordinates the catalog, persistent cart, drawer, and checkout.
import { useCallback, useState } from "react";
import AnnouncementBar from "./sections/AnnouncementBar/AnnouncementBar";
import StoreHeader from "./sections/StoreHeader/StoreHeader";
import Hero from "./sections/Hero/Hero";
import ProductCatalog from "./sections/ProductCatalog/ProductCatalog";
import StoreFooter from "./sections/StoreFooter/StoreFooter";
import CartDrawer from "./sections/CartDrawer/CartDrawer";
import CheckoutModal from "./sections/CheckoutModal/CheckoutModal";
import useCart from "./hooks/useCart";

export default function App() {
  const {
    items,
    itemCount,
    totals,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const closeCheckout = useCallback(() => setIsCheckoutOpen(false), []);

  // This handler switches from the cart panel to the checkout dialog.
  function openCheckout() {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }

  // This handler clears the saved cart after the customer confirms the demo order.
  function completeOrder() {
    clearCart();
    setIsCheckoutOpen(false);
  }

  return (
    <>
      <AnnouncementBar />

      <StoreHeader
        itemCount={itemCount}
        isCartOpen={isCartOpen}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />
        <ProductCatalog onAddToCart={addToCart} />
      </main>

      <StoreFooter />

      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        totals={totals}
        onClose={closeCart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={openCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        onOrderComplete={completeOrder}
      />
    </>
  );
}
