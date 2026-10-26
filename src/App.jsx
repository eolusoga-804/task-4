// This component arranges the storefront sections in page order.
import AnnouncementBar from "./sections/AnnouncementBar/AnnouncementBar";
import StoreHeader from "./sections/StoreHeader/StoreHeader";
import Hero from "./sections/Hero/Hero";
import ProductCatalog from "./sections/ProductCatalog/ProductCatalog";
import StoreFooter from "./sections/StoreFooter/StoreFooter";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main>
        <Hero />
        <ProductCatalog />
      </main>
      <StoreFooter />
    </>
  );
}
