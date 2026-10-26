// This component presents one product and its key details.
import { storeContent } from "../../data/storeContent";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  const category = storeContent.catalog.categories.find(
    (item) => item.id === product.category,
  );

  const price = new Intl.NumberFormat(storeContent.catalog.currencyLocale, {
    style: "currency",
    currency: storeContent.catalog.currencyCode,
  }).format(product.price);

  return (
    <article className="product-card">
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

        <button
          className="product-card__action"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          {storeContent.catalog.addToBagLabel}
        </button>
      </div>
    </article>
  );
}
