// This component displays one product's image, category, name, price, and rating.
import { storeContent } from "../../data/storeContent";
import "./ProductCard.css";

// This component displays one product and its staggered entrance.
export default function ProductCard({ product, index = 0, onAddToCart }) {
  const category = storeContent.catalog.categories.find(
    (item) =>
      item.id === product.category ||
      (item.id === "clothing" && product.category.includes("clothing")),
  );

  const price = new Intl.NumberFormat(storeContent.catalog.currencyLocale, {
    style: "currency",
    currency: storeContent.catalog.currencyCode,
  }).format(product.price);

  return (
    // This article enters after its preceding product cards.
    <article
      className="product-card"
      style={{ animationDelay: `${index * 65}ms` }}
    >
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />

        {product.rating?.rate >= 4.5 && (
          <span className="product-card__badge">
            {storeContent.catalog.favoriteBadge}
          </span>
        )}
      </div>

      <div className="product-card__details">
        <p className="product-card__category">
          {category?.label ?? product.category}
        </p>

        <h2 className="product-card__title">{product.title}</h2>

        <div className="product-card__meta">
          <span className="product-card__price">{price}</span>

          {product.rating && (
            <span
              className="product-card__rating"
              aria-label={`${storeContent.catalog.ratingLabel}: ${product.rating.rate} out of 5`}
            >
              ★ {product.rating.rate}
            </span>
          )}
        </div>

        {onAddToCart && (
          //  This button zooms in shortly after its product card appears.
          <button
            className="product-card__action"
            type="button"
            style={{ animationDelay: `${index * 65 + 220}ms` }}
            onClick={() => onAddToCart(product)}
          >
            {storeContent.catalog.addToCartLabel}
          </button>
        )}
      </div>
    </article>
  );
}
