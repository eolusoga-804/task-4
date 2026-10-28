// These hooks manage the long-press timer and product description state.
import { useEffect, useRef, useState } from "react";
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

  // This state controls the product's touch-triggered description popup.
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const cardRef = useRef(null);
  const pressTimerRef = useRef(null);
  const longPressTriggeredRef = useRef(false);

  // This helper clears a pending long-press timer.
  function clearDescriptionPressTimer() {
    if (pressTimerRef.current !== null) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  }

  // This handler opens details after a sustained touch or pen press.
  function startDescriptionLongPress(event) {
    if (event.pointerType !== "touch" && event.pointerType !== "pen") {
      return;
    }

    clearDescriptionPressTimer();
    longPressTriggeredRef.current = false;

    if (isDescriptionOpen) {
      setIsDescriptionOpen(false);
      longPressTriggeredRef.current = true;
      return;
    }

    pressTimerRef.current = window.setTimeout(() => {
      pressTimerRef.current = null;
      longPressTriggeredRef.current = true;
      setIsDescriptionOpen(true);
    }, storeContent.catalog.descriptionLongPressMs);
  }

  // This handler suppresses the synthetic click after a long press and closes an open popup on the next short tap.
  function handleDescriptionTriggerClick(event) {
    if (longPressTriggeredRef.current) {
      event.preventDefault();
      longPressTriggeredRef.current = false;
      return;
    }

    if (isDescriptionOpen) {
      setIsDescriptionOpen(false);
    }
  }

  // This object gives both the product image and title the same press behavior.
  const descriptionTriggerProps = {
    onPointerDown: startDescriptionLongPress,
    onPointerUp: clearDescriptionPressTimer,
    onPointerLeave: clearDescriptionPressTimer,
    onPointerCancel: clearDescriptionPressTimer,
    onClick: handleDescriptionTriggerClick,
  };

  // This effect clears any pending press timer when the card unmounts.
  useEffect(
    () => () => {
      if (pressTimerRef.current !== null) {
        window.clearTimeout(pressTimerRef.current);
      }
    },
    [],
  );

  // This effect closes the popup when the shopper taps outside the card or presses Escape.
  useEffect(() => {
    if (!isDescriptionOpen) {
      return undefined;
    }

    function handleOutsidePointer(event) {
      if (!cardRef.current?.contains(event.target)) {
        setIsDescriptionOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsDescriptionOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsidePointer);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDescriptionOpen]);

  return (
    // This article hosts the product card and its local description popup.
    <article
      ref={cardRef}
      className={`product-card${isDescriptionOpen ? " product-card--description-open" : ""}`}
      style={{ animationDelay: `${index * 65}ms` }}
    >
      <div className="product-card__image-wrap">
        {/* This image opens product details when held on touch screens. */}
        <img
          className="product-card__image"
          src={product.image}
          alt={product.title}
          loading="lazy"
          tabIndex={0}
          aria-describedby={`product-description-${product.id}`}
          {...descriptionTriggerProps}
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

        {/* This heading also opens product details when held on touch screens. */}
        <h2
          className="product-card__title"
          tabIndex={0}
          aria-describedby={`product-description-${product.id}`}
          {...descriptionTriggerProps}
        >
          {product.title}
        </h2>

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

      {/* This tooltip contains the full description for the current product. */}
      <div
        className="product-card__description-popover"
        id={`product-description-${product.id}`}
        role="tooltip"
      >
        {product.description}
      </div>
    </article>
  );
}
