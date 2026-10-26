// This section displays the store brand and primary navigation.
import { storeContent } from "../../data/storeContent";
import "./StoreHeader.css";

export default function StoreHeader() {
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
        </nav>
      </div>
    </header>
  );
}
