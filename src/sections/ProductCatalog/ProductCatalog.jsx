// This section loads, searches, filters, sorts, and displays catalog products.
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { storeContent } from "../../data/storeContent";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductLoading from "../../components/ProductLoading/ProductLoading";
import "./ProductCatalog.css";

export default function ProductCatalog({ onAddToCart }) {
  const { products, status, error, retry } = useProducts();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("featured");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "clothing" &&
        product.category.includes("clothing")) ||
      product.category === activeCategory;

    const searchableText =
      `${product.title} ${product.description} ${product.category}`.toLowerCase();
    const matchesSearch = searchableText.includes(
      searchTerm.trim().toLowerCase(),
    );

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts];

  if (sortOrder === "price-ascending") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-descending") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "rating") {
    sortedProducts.sort(
      (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0),
    );
  }

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

      <div className="product-catalog__tools">
        <label className="product-catalog__search">
          <span className="product-catalog__search-label">
            {storeContent.catalog.searchLabel}
          </span>
          <input
            className="product-catalog__search-input"
            type="search"
            value={searchTerm}
            placeholder={storeContent.catalog.searchPlaceholder}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>

        <label className="product-catalog__sort">
          <span className="product-catalog__search-label">
            {storeContent.catalog.sortLabel}
          </span>
          <select
            className="product-catalog__sort-select"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            {storeContent.catalog.sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        className="product-catalog__filters"
        role="group"
        aria-label={storeContent.catalog.categoryLabel}
      >
        {storeContent.catalog.categories.map((category) => (
          <button
            className="product-catalog__filter"
            key={category.id}
            type="button"
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {status === "loading" && <ProductLoading />}

      {status === "error" && (
        <div className="product-catalog__error" role="alert">
          <p className="product-catalog__message">{error}</p>
          <button
            className="product-catalog__retry"
            type="button"
            onClick={retry}
          >
            {storeContent.catalog.retryLabel}
          </button>
        </div>
      )}

      {status === "success" && sortedProducts.length === 0 && (
        <p className="product-catalog__message">
          {storeContent.catalog.emptyMessage}
        </p>
      )}

      {status === "success" && sortedProducts.length > 0 && (
        <div className="product-catalog__grid">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}
