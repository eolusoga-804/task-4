// This component confirms a cart addition with the selected product's details.
import { storeContent } from "../../data/storeContent";
import "./ProductAddedToast.css";

// This popup dismisses itself after the configured display duration.
export default function ProductAddedToast({ product, onClose }) {
  const formatPrice = (amount) =>
    new Intl.NumberFormat(storeContent.catalog.currencyLocale, {
      style: "currency",
      currency: storeContent.catalog.currencyCode,
    }).format(amount);

  return (
    //  This fixed layer centers the popup over the webpage. */
    <div className="product-added-toast__layer">
      {/* This live status announces the product addition to assistive technology. */}
      <aside className="product-added-toast" role="status" aria-live="polite">
        {/* This image identifies the product that was added. */}
        <img
          className="product-added-toast__image"
          src={product.image}
          alt=""
        />

        {/* This block presents the product copy, price, and rating. */}
        <div className="product-added-toast__details">
          <p className="product-added-toast__message">
            {storeContent.productAdded.message}
          </p>
          <h2 className="product-added-toast__title">{product.title}</h2>
          <p className="product-added-toast__description">
            {product.description}
          </p>
          <div className="product-added-toast__meta">
            <span>{formatPrice(product.price)}</span>
            {product.rating && (
              <span>
                ★ {product.rating.rate}{" "}
                <span className="product-added-toast__rating-label">
                  {storeContent.productAdded.ratingLabel}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* This button lets shoppers dismiss the confirmation immediately. */}
        <button
          className="product-added-toast__close"
          type="button"
          onClick={onClose}
          aria-label={storeContent.productAdded.closeLabel}
        >
          ×
        </button>
      </aside>
    </div>
  );
}
