// This component shares cart state across the header, catalog, and drawer.
import { useCallback, useState } from "react";
import AnnouncementBar from "./sections/AnnouncementBar/AnnouncementBar";
import StoreHeader from "./sections/StoreHeader/StoreHeader";
import Hero from "./sections/Hero/Hero";
import ProductCatalog from "./sections/ProductCatalog/ProductCatalog";
import StoreFooter from "./sections/StoreFooter/StoreFooter";
import CartDrawer from "./sections/CartDrawer/CartDrawer";
import useCart from "./hooks/useCart";

export default function App() {
  const {
    items,
    itemCount,
    totals,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  return (
    <>
      <AnnouncementBar />

      <StoreHeader
        itemCount={itemCount}
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
      />
    </>
  );
}
