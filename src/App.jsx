// This component coordinates the catalog, persistent cart, drawer, and checkout.
import { useCallback, useEffect, useState } from "react";
import { storeContent } from "./data/storeContent";
import AnnouncementBar from "./sections/AnnouncementBar/AnnouncementBar";
import StoreHeader from "./sections/StoreHeader/StoreHeader";
import Hero from "./sections/Hero/Hero";
import ProductCatalog from "./sections/ProductCatalog/ProductCatalog";
import StoreFooter from "./sections/StoreFooter/StoreFooter";
import CartDrawer from "./sections/CartDrawer/CartDrawer";
import CheckoutModal from "./sections/CheckoutModal/CheckoutModal";
// This import provides the compact editorial section before the footer.
import ClosingNote from "./sections/ClosingNote/ClosingNote";
import ProductAddedToast from "./components/ProductAddedToast/ProductAddedToast";
import useCart from "./hooks/useCart";

// This component manages storefront actions and displays the main sections.
export default function App() {
  // This hook provides persistent cart items, totals, and cart actions.
  const {
    items,
    itemCount,
    totals,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  // This state tracks whether the cart drawer or checkout dialog is open.
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // This state stores the product currently shown in the add-to-cart popup.
  const [addedProduct, setAddedProduct] = useState(null);

  // This callback closes the cart drawer.
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  // This callback closes the checkout dialog.
  const closeCheckout = useCallback(() => setIsCheckoutOpen(false), []);

  // This handler adds an item and updates the popup with a unique render key.
  function handleAddToCart(product) {
    addToCart(product);
    setAddedProduct({ ...product, toastId: Date.now() });
  }

  // This effect automatically dismisses the product confirmation popup.
  useEffect(() => {
    if (!addedProduct) {
      return undefined;
    }

    const timeoutId = window.setTimeout(
      () => setAddedProduct(null),
      storeContent.productAdded.durationMs,
    );

    return () => window.clearTimeout(timeoutId);
  }, [addedProduct]);

  // This handler switches from the cart panel to the checkout dialog.
  function openCheckout() {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }

  // This handler clears the saved cart after the demo order is confirmed.
  function completeOrder() {
    clearCart();
    setIsCheckoutOpen(false);
  }

  // This layout renders the announcement, navigation, store sections, and overlays.
  return (
    <>
      {/* This bar displays the store announcement above the header. */}
      <AnnouncementBar />

      {/* This header shows the brand and opens the cart drawer. */}
      <StoreHeader
        itemCount={itemCount}
        isCartOpen={isCartOpen}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* This main region contains the hero and searchable product catalog. */}
      <main>
        <Hero />
        <ProductCatalog onAddToCart={handleAddToCart} />
      </main>

      {/* This section adds a brief editorial pause before the footer. */}
      <ClosingNote />

      {/* This footer displays the store identity and footer message. */}
      <StoreFooter />

      {/* This popup confirms the most recently added product. */}
      {addedProduct && (
        <ProductAddedToast
          key={addedProduct.toastId}
          product={addedProduct}
          onClose={() => setAddedProduct(null)}
        />
      )}

      {/* This drawer displays cart contents and order totals. */}
      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        totals={totals}
        onClose={closeCart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={openCheckout}
      />

      {/* This dialog collects demo checkout details and confirms orders. */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        onOrderComplete={completeOrder}
      />
    </>
  );
}
