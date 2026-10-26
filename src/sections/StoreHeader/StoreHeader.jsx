// This section displays the brand, navigation, and cart drawer trigger.
import { storeContent } from "../../data/storeContent";
import "./StoreHeader.css";

export default function StoreHeader({ itemCount, onCartOpen, isCartOpen }) {
  return (
    <header className="store-header">
      <div className="store-header__inner">
        <a
          className="store-header__brand"
          href="/"
          aria-label={storeContent.brand}
        >
          <span className="store-header__mark" aria-hidden="true">
            e
          </span>
          <span>{storeContent.brand}</span>
        </a>

        <nav className="store-header__nav" aria-label="Main navigation">
          <a className="store-header__link" href="#home">
            {storeContent.header.homeLabel}
          </a>
          <a className="store-header__link" href="#catalog">
            {storeContent.header.catalogLabel}
          </a>
          <button
            className="store-header__cart-trigger"
            type="button"
            onClick={onCartOpen}
            aria-controls="cart-drawer"
            aria-expanded={isCartOpen}
            aria-label={`${storeContent.header.cartLabel}: ${itemCount} ${storeContent.header.cartCountLabel}`}
          >
            {storeContent.header.cartLabel}
            <span aria-hidden="true">{itemCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
