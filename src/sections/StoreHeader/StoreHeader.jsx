// This section displays the store brand and opens the cart drawer.
import { storeContent } from "../../data/storeContent";
import "./StoreHeader.css";

// This header keeps the cart trigger visible while shoppers browse.
export default function StoreHeader({ itemCount, onCartOpen, isCartOpen }) {
  return (
    <header className="store-header">
      {/* This inner wrapper aligns the brand and cart within the page width. */}
      <div className="store-header__inner">
        <a
          className="store-header__brand"
          href="/"
          aria-label={storeContent.brand}
        >
          {/* This text link displays the store name without a brand icon. */}
          <span>{storeContent.brand}</span>
        </a>

        {/* This button opens the cart and announces its current item count. */}
        <button
          className="store-header__cart-trigger"
          type="button"
          onClick={onCartOpen}
          aria-controls="cart-drawer"
          aria-expanded={isCartOpen}
          aria-label={`${storeContent.header.cartLabel}: ${itemCount} ${storeContent.header.cartCountLabel}`}
        >
          <svg
            className="store-header__cart-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 8H6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="1.7"
            />
            <circle cx="10" cy="19" r="1.3" fill="currentColor" />
            <circle cx="17" cy="19" r="1.3" fill="currentColor" />
          </svg>
          <span className="store-header__cart-label">
            {storeContent.header.cartLabel}
          </span>
          <span className="store-header__cart-count" aria-hidden="true">
            {itemCount}
          </span>
        </button>
      </div>
    </header>
  );
}
