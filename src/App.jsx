// This component shares cart state with the header and product catalog.
import AnnouncementBar from "./sections/AnnouncementBar/AnnouncementBar";
import StoreHeader from "./sections/StoreHeader/StoreHeader";
import Hero from "./sections/Hero/Hero";
import ProductCatalog from "./sections/ProductCatalog/ProductCatalog";
import StoreFooter from "./sections/StoreFooter/StoreFooter";
import useCart from "./hooks/useCart";

export default function App() {
  const { itemCount, addToCart } = useCart();

  return (
    <>
      <AnnouncementBar />
      <StoreHeader itemCount={itemCount} />
      <main>
        <Hero />
        <ProductCatalog onAddToCart={addToCart} />
      </main>
      <StoreFooter />
    </>
  );
}
