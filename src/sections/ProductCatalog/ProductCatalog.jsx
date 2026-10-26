// This section loads products and displays the catalog's current request state.
import useProducts from "../../hooks/useProducts";
import { storeContent } from "../../data/storeContent";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductCatalog.css";

export default function ProductCatalog() {
  const { products, status, error } = useProducts();

  return (
    <section
      className="product-catalog"
      id="catalog"
      aria-labelledby="product-catalog-title"
    >
      <div className="product-catalog__heading">
        <div>
          <p className="product-catalog__eyebrow">
            {storeContent.catalog.description}
          </p>
          <h2 className="product-catalog__title" id="product-catalog-title">
            {storeContent.catalog.title}
          </h2>
        </div>
      </div>

      {status === "loading" && (
        <p className="product-catalog__message" role="status">
          {storeContent.catalog.loadingMessage}
        </p>
      )}

      {status === "error" && (
        <p className="product-catalog__message" role="alert">
          {error}
        </p>
      )}

      {status === "success" && products.length === 0 && (
        <p className="product-catalog__message">
          {storeContent.catalog.emptyMessage}
        </p>
      )}

      {status === "success" && products.length > 0 && (
        <div className="product-catalog__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
